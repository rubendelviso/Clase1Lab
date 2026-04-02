const exec = (fn, valor) => fn (valor)
exec((x)=>x+1,3) //->4
exec((x)=> x%2 ==1,3)// Falso


//Una funcion puede retornar otra funcion

const closure = (value) => (x)=> x+ value

//Para ejecutar las dos cosas

closure(3)(2)//Ahi estaría haciendo 3 +2

//O sino 

const fn = closure(3)
///console.log(fn(2)) //Obtengo el mismo resultado pero de una forma mas separada


//pq se dice que el lenguaje admite funciones como "ciudadanas"  PREGUNTA DE PARCIAL

const fb = (x,v) => x>= v;

const execE =(f,v)=>(x)=> f(x,v)
//Recibe la primer funcion y el otro valor

const Primera = execE(fb,2) // -> esto me devuelve x => x>2
// console.log("hOLAA")
// console.log("hola",Primera())
//console.log(Primera(3))
//console.log(Primera(1))

//----------------------------------------------------------------------------------------------------
const validacionesOtras = {
    stock: (p,value)=> p.stock>value,
    precio: (p,value)=> p.precio > value,
    nombre: (p,value) => p.nombre.length > value,
}

const productos = [
    
    {stock:100,
    precio:1500,
    nombre:"galletas"},
    {stock:40,
    precio:100,
    nombre:"gaseosa"},
    {stock:60,
    precio:988,
    nombre:"pan"}
    


]

const filtros =[ 
    {fn:"stock",value:50},
    {fn:"precio",value:1000},
    {fn:"nombre",value:2}
]

//Lo primero va a ser obtener la lista de validaciones anexando el value
const ObtieneFunc = filtros.map(
    (fil )=> { 
        const fn = validacionesOtras[fil.fn]
        const value = fil.value


        return (p)=>fn(p,value)// con esto si estoy utilizando el closure que es justamente esto de ejecutar una funcion y devolver otra


        //return (p)=>fn //Con esto hasta aca obtengo stock:(p,value)=>....
        //Pero no puedo abrir parentesis pq se va a terminar ejecutando

    }

) //Recibe p y devuelve una funcion hasta aca p = (p,value) =>

//console.log(filtros)

const resultadoFinal = productos.filter( produ => {
    //Dentro del array de productos
    return (ObtieneFunc.every(filt => 
        {   
            const resultParcial = filt(produ)
            //Dentro del array de funciones
            // console.log(resultParcial)
            return resultParcial
            } )
)             
} )

//Otra forma de escribir y como lo escribio el profe (mas resumidp)
//--------------------------------------------------------------------------------------------------
const resultadoProfe= productos.filter( (produ)=> ObtieneFunc.every(funcs => funcs(produ)))
//--------------------------------------------------------------------------------------------------
console.log(resultadoFinal.length)
console.log(resultadoFinal)
