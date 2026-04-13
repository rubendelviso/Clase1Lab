//Se desea que a partir del metodo reduce obtener la valorizacion de stock sobre cada producto
//A partir del script de productos <-  aplicarle el reduce a esto


const productos = require('../productos.json')

//console.log(productos)

const categoriaIncrementador =[
    {'cat': "electrodomestico", "value":0},
    {'cat': "deportivo", "value":0},
    {'cat': "tecnología", "value":0},
    {'cat': "audio", "value":0} 

]
//const makeFn = ({categorias,precio} => categoriaIncrementador['categorias'] )
const ModificaCatIncr = (cat,precio)=>categoriaIncrementador.map(each => {
    //console.log("categoria :",cat,"      Precio:",precio)
    return each.cat ==cat?each.value+= precio:each.value}
    
)



const StockMaximo = productos.reduce((acc,curr )=> {
    const catEncontrada = categoriaIncrementador.find(listaCats => curr.categorias == listaCats.cat)
    //console.log(catEncontrada.cat) 
    const total = curr.precio*curr.stock
    ModificaCatIncr(catEncontrada.cat, total)
    
    //acc = categoriasincr []
    //curr = productos []
    

    return acc

},0)
// StockMaximo
console.log(categoriaIncrementador)

const maximoProdus = productos.reduce ((acc,curr) =>{
    !(acc)? acc = curr.precio:acc
    return acc = (acc<curr.precio?curr.precio:acc)
                //- inf <2 
                // 3>2? 3 : 2

},-Infinity) 
const minimoProdus = productos.reduce ((acc,curr) =>{
    !(acc)? acc = curr.precio:acc
    return acc = (acc>curr.precio?curr.precio:acc)
                // inf >2 acc = 2 
                //2>1? 3 : 2  = 1
                // 1 >3 ?  acc = 1

},Infinity) 
console.log(productos)
console.log(maximoProdus)
console.log(minimoProdus) 