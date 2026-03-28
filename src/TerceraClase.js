const exec = (x,y,f)=> {return f(x,y)}

//Le estamos pasando la funcion de sumar 
exec(5,3,(x,y)=>x-y)  //-> 2
exec(5,3,(x,y)=>x+y) //-> 8


const miFuncion= (x,y)=> {x*y}

exec(5,3,miFuncion)//Solo hago la referencia, pq si hiciera -> miFuncion(5,3) primero se ejecutaria y despues le pasaria el valor

const ListaDeNum= [8,9,6,3,4]

const resul = ListaDeNum.filter( (x)=> x%2 == 0)

//resul = [8,6,4] Le paso dentro , diferente sería si uso un .find
//O en todo caso si tneog una lista de numeros impares me daria undefined
//Considerar que este tipo de funciones devuelve un parametro y un booleano
//asi como si yo usara otro elemento como every find o map cualquiera de ellos
const a = [8,9,10,11]


const r = a.some((x) => x<5)// Lo mismo seria si yo const r = !a.some((x) => x<5) Entonces niego todo antes, obtengo el mismo resultado de otra forma


if (!r) console.log ("Probando el some como every")


const listaBooleana = [2,8,6]

const ListaMap = listaBooleana.map (x => x+1)
const resultadoListaMap = listaBooleana.map (x => x%2 ===0)// A su vez puede devolver un booleano, osea le puedo pasar una expresion y puede transformarlos en booleanos

console.log(resultadoListaMap)

const validaciones = {
    stock : (value) =>value>=100,
    nombre :(value) => value.length >=5


}

validaciones.stock(8)