// Forma mas convencional de ejecutar la funcion

const { privateDecrypt } = require("node:crypto")

const exec = (x,y,f)=> {return f(x,y)}  //Entonces recibe los tres  parametros
// De los cuales -> Tengo dos valores cualesquiera y luego la funcion 


//Le estamos pasando la funcion sumar en este caso 
exec(5,3,(x,y)=>x-y)  //-> 2
exec(5,3,(x,y)=>x+y) //-> 8

//Otra forma de ejecutar exec que es definiendo por un lado la funcion y luego pasandosela
const miFuncion= (x,y)=> {x*y}

exec(5,3,miFuncion)//NOTA : Solo hago la referencia, pq si hiciera -> miFuncion(5,3) primero se ejecutaria
// y despues le pasaria el valor. Al final es lo mismo que      ->    exec(5,3, ()=> {}) 



//---------------------------------------------------El some usado como every----------------------------------------------------------------------------------
const ListaDeNum= [8,9,6,3,4]

const resul = ListaDeNum.filter( (x)=> x%2 == 0)

//NOTASSS:
//resul = [8,6,4] Le paso dentro , diferente sería si uso un .find
//O en todo caso si tengo una lista de numeros impares me daria undefined: NO vacio,NO null, tampoco 0
//Considerar que este tipo de funciones SIEMPRE hay que pasarle un parametro y una expresion
//asi como si yo usara otro elemento como every find o map cualquiera de ellos

const a = [8,9,10,11]


const r = a.some((x) => x<5)// Lo mismo seria si yo const r = !a.some((x) => x<5) Entonces niego todo antes,
//obtengo el mismo resultado de otra forma.     Aca mi objetivo siempre fue poder iterar toda la lista como podría haberlo hecho con every


if (!r) console.log ("Probando el some como every")

//---------------------------------------Como transformar una lista---------------------------------------------------------------------------------------------------------

const listaBooleana = [2,8,6]

const ListaMap = listaBooleana.map (x => x+1)
const resultadoListaMap = listaBooleana.map (x => x%2 ===0)// A su vez puede devolver un booleano,
//                                                          osea le puedo pasar una expresion y puede transformarlos en booleanos

console.log(resultadoListaMap)//Devuelve una lista de booleanos pq la transforme -> [bool,bool,bool]


//--------------------------------Otro tema---------------------------------------------------------------------------------------------------------------

const validaciones = {
    stock : (value) => value>=100,
    nombre :(value) => value.length >=5
}
//validaciones.stock(8)
//Primer Ejemplo
const ProductoUno = {
    stock: 200,
    nombre:"Galletas"

};
const ProductoDos = {
    stock: 2,
    nombre:"Gaseosa"

};

console.log(
    "Primer Producto validacion stock:",validaciones.stock(ProductoUno["stock"]),
    "\nSegundo Producto validacion stock:", validaciones.stock(ProductoDos["stock"]),

    "\nPrimer Producto validacion Medida:", validaciones.nombre(ProductoDos["nombre"]),
    "\nSegundo Producto validacion Medida:", validaciones.nombre(ProductoDos["nombre"])
)
//--------------------------------Probando Validaciones con " capas " ---------------------------------------------------------------------------------------------------------------


const validacionesOtras = {
    stock: (p,value)=> p.stock>value,
    precio: (p,value)=> p.precio > value,
    nombre: (p,value) => p.nombre > value,
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
// const listaRes = []
const resultadoFiltro =(p)=> {
    const Validacion = []
    filtros.map(fil =>  {
    
    //console.log(validacionesOtras[fil.fn](p,fil.value))
    //return validacionesOtras[fil.fn](p,fil.value)}
    Validacion.push(validacionesOtras[fil.fn](p,fil.value)) }

)
 
 return Validacion
}

//Convierto el array de filtros en una lista de funciones
//console.log(resultadoFiltro)

const listaValidada = []


    for(let i=0; i<productos.length;i++){
        const objetoNuevo = resultadoFiltro(productos[i])
        listaValidada.push(productos[i].nombre)
        listaValidada.push(objetoNuevo)
        // listaValidada.push(objetoNuevo)
        

}

console.log(listaValidada)

//--------------------------------Probando el includes---------------------------------------------------------------------------------------------------------------

//result = a.includes(11)

//console.log(result)

const listaObj = [{x:0,y:0}]


const aa = [8,9,11,13,listaObj]

//console.log(a.includes({x:0,y:0}))

//console.log(a.includes(listaObj)) //La diferencia con lo anterior es q esta apuntando o haciendo referencia a una referencia en memoria diferente