const usuarios = [
  { nombre: "Juan", edad: 20, activo: true },
  { nombre: "Ana", edad: 17, activo: true },
  { nombre: "Luis", edad: 25, activo: false },
  { nombre: "Sofia", edad: 30, activo: true }
];
const validaciones={
    edad:(prod,valor) => prod.edad > valor,
    activo:(prod,valor)=>prod.activo == valor

}
const reglas = [
  { campo: "edad", valor: 18 },
  { campo: "activo", valor: true }
];

//------------------------Ejercicio nª1------------------------
const makeFunction = reglas.map((reg)=> {return (prod)=>validaciones[reg.campo](prod,reg.valor)}) // Esto devuelve [()=> {}]
//prod.edad > 18 ? 
const Verificadora = usuarios.filter((usu)=>makeFunction.every(fn =>fn(usu)))

//console.log(Verificadora)

const productos = [
  { nombre: "TV", categoria: "tecnologia", precio: 1000, stock: 10 },
  { nombre: "Auriculares", categoria: "audio", precio: 200, stock: 20 },
  { nombre: "Pelota", categoria: "deportivo", precio: 100, stock: 30 },
  { nombre: "Notebook", categoria: "tecnologia", precio: 2000, stock: 5 }
];
//------------------------Ejercicio nª3------------------------
const StockTotal = productos.reduce((acc,cur) =>{ 
    const categoria = cur.categoria
    //prod[]
    acc[categoria]+=cur.precio*cur.stock
    return acc
},{
    tecnologia:0,
    audio:0,
    deportivo:0
}) 

console.log(StockTotal)

//------------------------Ejercicio nª4------------------------

const maximoMinimo = productos.reduce((acc,curr)=> {
  acc.mayorPrecio = (acc.mayorPrecio>curr.precio?curr.precio:acc.mayorPrecio)
  acc.menorStock  = (curr.stock> acc.menorStock?acc.menorStock:curr.precio)        
  //     //Primera vuelta:  0 >1?
  return acc
  
},{mayorPrecio:-Infinity,menorStock:Infinity})

console.log(maximoMinimo)