
// eslint-disable-next-line react/prop-types
const FormInput = ({placeholder, type, id, ...props}) => {
  return (
    <div>
        <input className="form_input" placeholder={placeholder} type={type} id={id} {...props}/>
    </div>
  )
}

export default FormInput