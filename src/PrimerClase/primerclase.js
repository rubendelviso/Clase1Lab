//Para crear un objeto en javascript
// { key1: valor1, key2, key3 }// Solo un ejemplo

// Palabras resservadas recordar

const hola = 12   //Siempre tratar de usar la palabra reservada const
var chau = "abc"  //Como ultima instancia usar la palabra var o let

//Aca solo mostramos que key no cambia. En cambio el valor del objeto si puede cambiar 
//const listaDeKeys = { key1: valor1, key2: valor2, key3valor3 }


//----------------------------------------------------------------v----------------------------------------------------------------
//Ejemplo de como defininr un objeto y sus diferentes atributos

Persona1 = { nombre: "Pablo", edad: 17, residencia: { calle: 2, numero: 3200, localidad: "Jose C Paz", provincia: "Buenos Aires" },
esMayor:function(value){return value>18}}

//Ahora si quisiera cambiar algun valor de los atributos
Persona1.edad = 19
Persona1["edad"] = 20
console.log("la edad es",Persona1.edad) 


//Diferentes formas de definir los objetos
// Por ejemplo en una lista

const a = [Persona1,{},{}] //Ahi se ve como en la primera variable referenciamos  a un objeto
//y en el otro defino el objeto dentro de la lista directamente

//Ahora otro ejemplo

const al1 = {nombre:"Martin", aprobadas:21, tieneIngles:true}
const al2 = {nombre:"Gonzalo", aprobadas:13, tieneIngles:false}
const al3 = {nombre:"Ruben", aprobadas:12, tieneIngles:true}


const listaDeAlumnos = [al1,al2,al3]//Forma de definir por extension

listaDeAlumnos[1]["aprobadas"]=20 //Forma de acceder a un lugar en la lista

listaDeAlumnos.push({nombre:"alexis", aprobadas:14, tieneIngles:true})

console.log(listaDeAlumnos.length)//Ahora tengo 4

//Formas de hacer un filtro
function filtro (values){
    const result = []
    for(let i=0; i<values.length;i++){
        if(values[i].aprobadas >=20 && values[i].tieneIngles){result.push(values[i])}  
    }
}


//Ahora el filtro pero solo con arrow functions

const falu = (value)=> value.aprobadas>=20 && value.tieneIngles

// falu({al1},{al2})
//Recordemos que este tipo de funciones solo recibe funciones como parametro

console.log(listaDeAlumnos.filter(falu))  //Por algun motivo cuando le paso la funcion va sin el parentesis como se ve en la funcion
