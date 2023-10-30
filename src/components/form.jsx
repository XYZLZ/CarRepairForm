import {useRef, useState, lazy} from 'react'
import SignaturePad from 'react-signature-canvas'
import {useNavigate} from 'react-router-dom'

import {formValues, modelo, marca, repairAuth} from '../mocks/options'
import {SuccessAlert} from '../utils'
// import {fetchAuthOptions, fetchModelOptions} from '../services'
const FormInput = lazy(()=> import('./FormInput'));

const Form = () => {
    const pad = useRef(null);
    const pad2 = useRef(null);
    const [inputs, setInputs] = useState(formValues)
    // const [authOptions, setAuthOptions] = useState(null);
    // const [brands, setBrands] = useState(null);
    const navigate = useNavigate();
    // * Funciones para limpiar y guardar la firma
    const clear = () => pad.current.clear();
    const clear2 = () => pad2.current.clear();
    const save = () => {
      setInputs({...inputs, clientSignature: pad.current.getTrimmedCanvas().toDataURL('image/png')});
      SuccessAlert("Firma Cliente", "Firma registrada correctamente", "success", 2000);
    };
    const save2 = () => {
      setInputs({...inputs, advisorSignature: pad2.current.getTrimmedCanvas().toDataURL('image/png')})
      SuccessAlert("Firma Asesor", "Firma registrada correctamente", "success", 2000);
    };

    // * Funcion para almacenar los checkbox seleccionados en un arreglo
    const checksChange = () => {
        let checksArr = [];
        const checks = document.querySelectorAll('.checks');
        
            checks.forEach(e => {
                if (e.checked) {
                    checksArr.push(e.value);
                }
            });
            setInputs({...inputs, authorizations: checksArr});
    }
    
    const handleChange = (e) => setInputs({...inputs, [e.target.name]: e.target.value});

    const handleSubmit = async (e) => {
      // console.log(e.target.id);
        e.preventDefault();
        
        const values = Object.values(inputs);

        if (values.some(elm => elm === '' || elm === undefined || elm === null)) {
          return alert('Llenar todos los campos');
        }
        
        const obj = {...formValues, ...inputs};
        localStorage.setItem('repairData', JSON.stringify(obj));
        navigate('/pdf');

    }


    // useEffect(() => {
    //     (async() => {
    //     const authOptions = await fetchAuthOptions();
    //     const brands = await fetchModelOptions();
    //     setBrands(brands);
    //     setAuthOptions(authOptions)
    //     })()
    // }, [])


  return (
    <>
        <form  className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 text-center">
                  <input className="form_input" name="name" placeholder="nombre" type="text" id="name" required onChange={handleChange} />
                  <input className="form_input" name="address" placeholder="Calle 10, #12 los cerros" type="text" id="name" required onChange={handleChange}/>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormInput id={'phone'} placeholder={'Telefono'} type={'tel'} name="phone" required onChange={handleChange}/>
                  <FormInput id={'cellPhone'} placeholder={'Numero celular'} type={'tel'} name="cellPhone" required onChange={handleChange}/>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="marca">Marca</label>
                    <select className="form_input" name="brand" placeholder="Marca" id="brand" required onChange={handleChange}>
                    <option value="none">Marca</option>
                    {marca?.map(item => (
                      <option value={`${item.brand}`} key={item.id}>{item.brand}</option>
                    ))}
                    </select>
                  </div>
                  <div>
                    <select className="form_input" name="model" placeholder="modelo" id="model" required onChange={handleChange}>
                      <option value="none">Modelo</option>
                      {modelo.map(item => (
                        <option value={`${item.model}`} key={item.id}>{item.model}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <FormInput id={'date'} placeholder={'Fecha'} type={'date'} name="date" required onChange={handleChange}/>
                  <FormInput id={'hour'} placeholder={'Hora'} type={'datextte'} name="hour" required onChange={handleChange}/>
                  <FormInput id={'card_no'} placeholder={'No Tarjeta'} type={'text'} name="card_no" required onChange={handleChange}/>
                </div>
                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <FormInput id={'plate'} placeholder={'Placa'} type={'text'} name="plate" required onChange={handleChange}/>
                  <FormInput id={'kms'} placeholder={'KMS'} type={'text'} name="kms" required onChange={handleChange}/>
                  <FormInput id={'gas'} placeholder={'GAS'} type={'text'} name="gas" required onChange={handleChange}/>
                </div>
                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <FormInput id={'year'} placeholder={'Año'} type={'date'} name="year" required onChange={handleChange}/>
                  <FormInput id={'color'} placeholder={'Color'} type={'text'} name="color" required onChange={handleChange}/>
                  <FormInput id={'other'} placeholder={'Otros'} type={'text'} name="other" onChange={handleChange}/>
                </div>
                <hr />
                <div className='w-full flex justify-center items-center'><span className='text-center text-md font-medium'>Autorizacion de reparacion</span></div>
                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                 {repairAuth?.map(item => (
                   <div key={item.id}>
                   <input className="peer sr-only checks" id={`opcion${item.id}`} type="checkbox" value={`${item.repairAuth}`} tabIndex={-1} name={`authorizations`} onChange={checksChange} />
                   <label htmlFor={`opcion${item.id}`} className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white" tabIndex={0}>
                     <span className="text-sm"> {item.repairAuth}</span>
                   </label>
                 </div>
                 ))}
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormInput id={'chasis'} placeholder={'Chasis'} type={'text'} name="chasis" required onChange={handleChange}/>
                  <FormInput id={'motor'} placeholder={'Motor No'} type={'text'} name="motor" required onChange={handleChange}/>
                </div>
                <div>
                  <textarea className="form_input resize-none" name='message' required placeholder="Descripcion del trabajo" rows={8} id="message" defaultValue={""} onChange={handleChange} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 text-center">
                <div className='relative'>
                <SignaturePad ref={pad} canvasProps={{className: 'signaturePad relative'}} />
                    <a onClick={clear} className='signature_btn absolute left-2  top-32'>Clear</a>
                    <a onClick={save} className='signature_btn absolute left-24 top-32'>Save</a>
                </div>
                <div className='relative'>
                <SignaturePad ref={pad2} canvasProps={{className: 'signaturePad relative'}}/>
                    <a onClick={clear2} className='signature_btn absolute left-2  top-32'>Clear</a>
                    <a onClick={save2} className='signature_btn absolute left-24 top-32'>Save</a>
                </div>
                </div>
                <div className="mt-4">
                  <button type="submit" id='btn_submit' className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto hover:scale-105 hover:transition-transform">
                    Generar Orden
                  </button>
                </div>
              </form>
    </>
  )
}

export default Form