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
console.log(Primera(3))
console.log(Primera(1))