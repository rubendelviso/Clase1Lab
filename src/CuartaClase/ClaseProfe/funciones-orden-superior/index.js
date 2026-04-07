const { array } = require('i/lib/util');
const productos = require('./productos');

const validaciones = {
    stock : (p, valor)=> p.stock > valor,
    precio : (p, valor) => p.precio <= valor,
    nombre: (p, valor) => p.nombre.length < valor,
    categoria: (p, valor) => valor.includes(p.categorias)
}

const filtros =[
// {fn:"nombre",value:13},
// {fn:"stock",value:5}
{fn:"categoria",value:"electrodomestico"}
//Se podrían agregar muchos mas
]

//Lo primero va a hacer crear el array de funciones que me devuelva
//considerando el array de filtros para traer esas funciones

const arrayDeFunciones = (producto) => ({fn,value})=> validaciones[fn](producto,value)

// console.log("Aca veo como me devuelve la funcion con mi objeto anidado\n ----->"
//   ,arrayDeFunciones(productos[3]).toString())

// console.log("Aca voy a pasarle un producto('zapatillas') y ademas uno de los filtros('stock') para ver que devuelve\n"
// ,arrayDeFunciones(productos[3])(filtros[1]))

const res1 = productos.filter(prod => filtros.every(fil=>arrayDeFunciones(prod)(fil)))

console.log(res1)

//({fn,value}) Este tipo de cosas sirve para no tener que hacer
//filtros.fn o filtros.value en este caso  
//Realmente no importa como lo llame aca adentro si no que desde fuera pase bien el objeto o el array de los mismos