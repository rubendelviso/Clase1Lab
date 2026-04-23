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

// const maximoMinimo = productos.reduce((acc,curr)=> {
//   acc.mayorPrecio = (acc.mayorPrecio>curr.precio?curr.precio:acc.mayorPrecio)
//   acc.menorStock  = (curr.stock> acc.menorStock?acc.menorStock:curr.precio)        
//   //     //Primera vuelta:  0 >1?
//   return acc
  
// },{mayorPrecio:-Infinity,menorStock:Infinity})

console.log(maximoMinimo)

//----------------------Segun chat:
const StockTotalChat = productos.reduce((acc, cur) => {
  const categoria = cur.categoria;
  const total = cur.precio * cur.stock;

  if (!acc[categoria]) {
    acc[categoria] = 0;
  }

  acc[categoria] += total;

  return acc;
}, {});

//------------------------Ejercicio nª4------------------------
// const productosj = require('../productos.json')
// const maximoMinimo = productosj.reduce((acc,curr)=> {
//   acc.mayorPrecio = (curr.precio>acc.mayorPrecio?curr.precio:acc.mayorPrecio)
//   acc.menorStock  = (curr.stock> acc.menorStock?acc.menorStock:curr.stock)        
//   //     //Primera vuelta: 2 >3?acc
//   return acc
  
// },{mayorPrecio:-Infinity,menorStock:Infinity})
//Copia para mostrar el objeto completo
const productosj = require('../productos.json')
const maximoMinimo = productosj.reduce((acc,curr,ind)=> {
  acc.mayorPrecio = (curr.precio>acc.mayorPrecio?curr.precio:acc.mayorPrecio)
  acc.menorStock  = (curr.stock> acc.menorStock?acc.menorStock:curr.stock)  //     //Primera vuelta: 2 >3?acc
  if(ind == (productosj.length)-1) { precioViejo=acc.mayorPrecio;acc.mayorPrecio = productosj.find(pr =>pr.precio == precioViejo);
    stockViejo = acc.menorStock;acc.menorStock = productosj.find(pr =>pr.stock == stockViejo)
  }
  return acc
   
},{mayorPrecio:-Infinity,menorStock:Infinity})

//----------------------Segun chat:
const maximoMinimoChat = productosj.reduce((acc, curr) => {
  if (curr.precio > acc.mayorPrecio.precio) {
    acc.mayorPrecio = curr;
  }

  if (curr.stock < acc.menorStock.stock) {
    acc.menorStock = curr;
  }

  return acc;
}, {
  mayorPrecio: productosj[0],
  menorStock: productosj[0]
});

//console.log(maximoMinimo)

//console.log(StockTotal)
//------------------------------Ejercicio 5 ----------------------------------------
const TransformarTotal = (productosj.map((pr) =>
    {return (pr.stock>10?{nombre:pr.nombre,total:pr.precio*pr.stock}:null)
      

    }))

const otroTransformar = productosj.filter(prod => prod.stock>10)

const Trans = otroTransformar.map(pr=>{
  
  return {nombre:pr.nombre,total:pr.precio*pr.stock}
})
const totalReduce =Trans.reduce((acc,curr)=>acc+=curr.total,0) 
Trans.push({"Total":totalReduce})
console.log(Trans)
//----------------------Segun chat:
const total = productosj
.map(p => ({
  .filter(p => p.stock > 10)
    nombre: p.nombre,
    total: p.precio * p.stock
  }))
  .reduce((acc, p) => acc + p.total, 0);

console.log(total);
//------------------------------Ejercicio 6 ----------------------------------------
miReduce=(array,fn,valorInicial)=>{
  let acu =  valorInicial
  //array.unshift(valorInicial)
  array.forEach(element => {
    // if(element==array[0]) 
    return acu+=fn(element)
  });

}
//Pregunta ultima: Recuerda y puede acceder a variables de su entorno, incluso después de que ese entorno ya terminó de ejecutarse
