// 🧪 EJERCICIO — “Sistema de descuentos dinámicos”

const { profileEnd } = require("console")

// Tenés productos con precios:

// const productos = [
//     {nombre: "Laptop", precio: 2000, categoria: "tecnologia"},
//     {nombre: "Mouse", precio: 50, categoria: "tecnologia"},
//     {nombre: "Silla", precio: 300, categoria: "hogar"}
// ]

// Y reglas de descuento:

// const reglas = [
//     {tipo: "categoria", valor: "tecnologia", descuento: 0.1},
//     {tipo: "precioMayor", valor: 1000, descuento: 0.2}
// ]
// 🎯 Objetivo

// 👉 Para cada producto:

// Determinar qué reglas aplican
// Aplicar TODOS los descuentos que correspondan
// Devolver el precio final

const productos = [
    {nombre: "Laptop", precio: 2000, categoria: "tecnologia"},
    {nombre: "Mouse", precio: 50, categoria: "tecnologia"},
    {nombre: "Silla", precio: 300, categoria: "hogar"}
]
// const filtros= [
//     {precio:(p,value)=>p.precio>value},
//     {categoria:(p,value)=>p.categoria.includes[value]}

// ]

const reglas = [
    {tipo: "categoria", valor: "tecnologia", descuento: 0.1},
    {tipo: "precioMayor", valor: 1000, descuento: 0.2}
]

//Tengo que realizar una funcion que verifique
//sobre cada producto las reglas existentes
const makeFunction = (reg) => {

    return ((p)=>{
        
        //Dependiendo el caso va a retornar una de las funciones que se ven
        if (reg.tipo == "categoria"){
            // return p.categoria == reg.valor? p.precio-= (p.precio*reg.descuento):p.precio
            return p.categoria == reg.valor?reg.descuento:0  
        }
        else if(reg.tipo=="precioMayor"){
            // return p.precio>reg.valor? p.precio-=p.precio*reg.descuento:p.precio
            return p.precio>reg.valor?reg.descuento:0
        }

    }) 
        //p.categoria.includes(reg.valor))
    
    // return ((p)=> reglas(p,p.precio))//Osea filtros [ precio: o categoria:] 
} 

const listaFn = reglas.map ( reg => makeFunction (reg))

// const resultadoDescuento = productos.map(produ=>listaFn.every(fn=>fn(produ)))//Lo hago con map
// //pq este ejercicio no devuelve booleanos sino que modifica precios

//Primero obtengo descuentos desps los aplico a todos
const descuentos = (p)=>listaFn.map(fn=>fn(p))

const resultado = productos.map(produ => {
    let precioFinal= 0
    const descuento = descuentos(produ)
        precioFinal = descuento.reduce((acc,curr)=> {
            
            acc = acc-(acc*curr)
            return acc

        
        },produ.precio)
        return{"producto":produ.nombre,
               "precio": precioFinal,
               "categoria":produ.categoria
        }
}
)


console.log(resultado)  