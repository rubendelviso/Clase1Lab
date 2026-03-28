const validaciones = {
    stock: (p,value)=> p.stock>value

}

const productos = [{
    stock:100,precio:1500,nombre:"prodV1"


}]

const filtros = {
    fn:"stock",value:50


}

//Convierto el array de filtros en una lista de funciones

const resultadoFiltro = (each) => {
    validaciones[each.fn]

}

//productos.filter(p=>resultadoFiltro.some(p=> p())) //Falta completar esta funcion

//Nueva funcion



//result = a.includes(11)

//console.log(result)

const listaObj = [{x:0,y:0}]


const a = [8,9,11,13,listaObj]

console.log(a.includes({x:0,y:0}))

console.log(a.includes(listaObj)) //La diferencia con lo anterior es q esta apuntando o haciendo referencia a una referencia en memoria diferente