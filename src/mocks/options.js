const repairAuth = [
  {
    id: 1,
    repairAuth: "Aire Acondicionado",
  },
  {
    id: 2,
    repairAuth: "Alfombras",
  },
  {
    id: 3,
    repairAuth: "Antena",
  },
  {
    id: 4,
    repairAuth: "Asientos",
  },
  {
    id: 5,
    repairAuth: "Bateria",
  },
  {
    id: 6,
    repairAuth: "Bocinas",
  },
  {
    id: 7,
    repairAuth: "LLavero",
  },
  {
    id: 8,
    repairAuth: "Vidrios",
  },
];

const marca = [
  {
    id: 1,
    brand: "BMW",
  },
  {
    id: 2,
    brand: "Mercedes-Benz",
  },
  {
    id: 3,
    brand: "Audi",
  },
  {
    id: 4,
    brand: "Ford",
  },
  {
    id: 5,
    brand: "Renault",
  },
  {
    id: 7,
    brand: "CHEVROLET",
  },
  {
    id: 8,
    brand: "Honda",
  },
  {
    id: 9,
    brand: "Hyundai",
  },
];

let formValues = {
  name: "",
  address: "",
  phone: "",
  cellPhone: "",
  brand: "",
  model: "",
  date: "",
  hour: "",
  card_no: "",
  plate: "",
  kms: "",
  gas: "",
  year: "",
  color: "",
  other: "",
  authorizations: [],
  chasis: "",
  motor: "",
  message:"",
  clientSignature: "",
  advisorSignature: "",
};


const modelo = [
  {
    id: 1,
    model: 'Modelo1',
  },
  {
    id: 2,
    model: 'Modelo2',
  },
  {
    id: 3,
    model: 'Modelo3',
  },
  {
    id: 4,
    model: 'Modelo4',
  },
  {
    id: 5,
    model: 'Modelo5',
  },
  {
    id: 6,
    model: 'Modelo6',
  },
];

export { repairAuth, marca, modelo, formValues};
