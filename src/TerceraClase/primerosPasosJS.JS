//alert("alexis Pelotudo") NO FUNCIONO -> Solo se usa combinado con HTML (paginas web)
//-----------------------------Ejercicio N°1---------------------------
//Escribe un script que verifique si un num es positivo, negativo o cero
const Verificador = (num)=>{
    if (num<0){return "es Negativo"}
    else if(num>0){return "es Positivo"}
    else return "Es cero"
}
console.log(Verificador(-1))

//----------------------------Ejercicio n°2----------------------------------------
//Escribe un script que verifique si un número es positivo, negativo o cero, y que además verifique si es par o impar.
const VerificadorOTRO = (num)=>{
    let VerificaPar = false;
    if (num%2 === 0) VerificaPar = true
    if (num<0 && VerificaPar){return "es Negativo y par"}
    else if (num<0 && !VerificaPar){return"Es negativo e impar"}
    
    else if(num>0 && VerificaPar){return "es Positivo y par"}
    else if(num>0 && !VerificaPar){return "es positivo e impar"}
    else return "Es cero"
}
console.log(VerificadorOTRO(0))

//---------------------------Ejercicio n°3--------------------------
// Al ejercicio de tienda propuesto para la creación de un objeto en JavaScript
// agrega una función al objeto tienda llamada mostrarProductos.

// Esta función debe recorrer el array de productos y mostrar el nombree y el precio de cada producto en la consola en el siguiente formato:

// Usa el método for para recorrer el array de productos.


// Definición del objeto
const tienda = {
    nombre: "Ferretería ABC",
    direccion: "Calle Principal 123",
    productos: [
        { id: 1, nombre: "Martillo", precio: 10.99 },
        { id: 2, nombre: "Destornillador", precio: 5.49 },
        { id: 3, nombre: "Taladro", precio: 29.99 },
        { id: 4, nombre: "Sierra", precio: 15.99 }
    ],
        }

for(producto of tienda.productos){
    console.log(producto)
}

//Mas sobre funciones en javascript
const fn = function (n) { return n * 3 }
        //->        N*3  
function compose(paramFn) { // paramfn = 9

  return function(paramValue) {

    return paramValue + paramFn(paramValue)

  } 

}

resultado = compose(fn)(3)

console.log(resultado)
//---------------------------Ejercicio n°4--------------------------
// Repaso de funciones de orden superior 

// Ejemplo base: 

const arr = [ 

 { nombre: "a", valor: 3 },

 { nombre: "b", valor: 8 }, 

 { nombre: "c", valor: 12 }

 ] 

// 1) Quedarse con los objetos cuyo valor ≥ 10:
console.log (arr.filter(Iter=>{
    
    if (Iter.valor>=10)return Iter}
))

// 2) Obtener solo los nombres de esos objetos 
console.log(arr.map (iter => {return iter.nombre}))

// 3) reduce: dejar un solo resultado (ej.: el objeto con mayor valor):
console.log(arr.reduce((acc,curr)=>{
    
    return curr.valor>acc?acc = curr.valor:acc
},0))