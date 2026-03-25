const alumnos = [
  {
    "nombre": "Juan",
    "aprobadas": [
      "Matemáticas",
      "Historia",
      "Lengua"
    ],
    "tieneIngles": true
  },
  {
    "nombre": "Maria",
    "aprobadas": [
      "Matemáticas",
      "Química",
      "Física"
    ],
    "tieneIngles": false
  },
  {
    "nombre": "Pedro",
    "aprobadas": [
      "Biología",
      "Geografía",
      "Matemáticas"
    ],
    "tieneIngles": true
  },
  {
    "nombre": "Ana",
    "aprobadas": [
      "Lengua",
      "Historia",
      "Física"
    ],
    "tieneIngles": false
  }
];

const funcionValida = (alumno) => {
    return alumno.aprobadas.length >= 3 && alumno.tieneIngles    
}

//Probando la funcion validadora
const resultado = alumnos.filter(funcionValida)

// console.log(resultado)

//El segundo paso es agregarle "first steps"

resultado.map( alum => alum.aprobadas.push("firstSteps"))

console.log("Lista Vieja de alumnos",alumnos,"\n ------------------------------------\n Lista Nueva de Alumnos:",resultado)

//Aca se puede ver como en la lista original se realizan los cambios  