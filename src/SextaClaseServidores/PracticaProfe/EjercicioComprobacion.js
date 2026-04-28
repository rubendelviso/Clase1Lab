// //Ejercicio 1
// const nums = [2, 5, 8, 11]

// const checks = [
//   n => n > 10,
//   n => n % 2 === 0,
//   n => n < 3
// ]

// const res = nums
//   .map(n => checks.map(fn => fn(n)))
//   .filter(arr => arr.some(v => v))

// console.log(res)
// //Ejercicio 2
// const values = [3, 6, 9, 10]

// const fns = [
//   n => n % 3 === 0,
//   n => n > 2,
//   n => n < 10
// ]

// const res2 = values
//   .map(v => fns.map(fn => fn(v)))
//   .filter(arr => arr.every(v => v))

// console.log(res2)

// const nums = [7, 10, 15, 20]

// const fns = {
//   a: n => n + 1,
//   b: n => n % 5,
//   c: n => n > 10
// }

// const keys = ['a', 'b', 'c']

// const res = nums
//   .map(n => keys.map(k => fns[k](n)))
//   .find(arr => arr[1] === 0 && arr[2])

// console.log(res)

// const nums = [1, 4, 7, 10]

// const fns = [
//   n => n * 2,
//   n => n % 3,
//   n => n - 1
// ]

// const res = nums
//   .map(n => fns.map(fn => fn(n)))
//   .filter(arr => arr.includes(0))

// console.log(res)
// const nums = [3, 5, 12]

// const fns = [
//   n => n % 2 === 0,
//   n => n > 10,
//   n => n === 5
// ]

// const res = nums
//   .map(n => fns.map(fn => fn(n)))
//   .filter(arr => arr.some((v, i) => v && i === 2))

// console.log(res)

// const nums = [4, 9, 16]

// const fns = [
//   n => n / 2,
//   n => n % 4,
//   n => n > 10
// ]

// const res = nums
//   .map(n => fns.map(fn => fn(n)))
//   .findIndex(arr => arr[1] === 0 && arr[2])

// console.log(res)
// const nums = [2, 3, 4]

// const fns = [
//   n => [n, n * 2],
//   n => [n % 2 === 0]
// ]

// const res = nums
//   .map(n => fns.map(fn => fn(n)))
//   .flat(2)
//   .filter(v => typeof v === 'number' && v > 3)

// console.log(res)
// const nums = [5, 10, 15]

// const fns = [
//   n => n % 5 === 0,
//   n => n > 7
// ]

// const res = nums
//   .map(n => fns.map(fn => fn(n)))
//   .reduce((acc, arr) => acc + arr.filter(v => v).length, 0)

// console.log(res)


// const nums = [2, 3, 6]

// const fns = [
//   n => n + 1,
//   n => n % 2 === 0,
//   n => n * 3
// ]

// const res = nums
//   .map(n => fns.map(fn => fn(n)))
//   .filter(arr => arr[1])
//   .map(arr => arr[0] + arr[2])

// console.log(res)

// const equipos = [
//   { nombre: "Rojo",  jugadores: ["Ana", "Luis", "Carla"] },
//   { nombre: "Azul",  jugadores: ["Pedro", "Sofia"]       },
//   { nombre: "Verde", jugadores: ["Juan", "Marta", "Diego", "Pablo"] },
// ]

// const res = equipos
//   .filter(e => e.jugadores.length >= 3)
//   .map(e => e.jugadores)
//   .flat()
//   .filter(j => j.length > 4)

// console.log(res)
// const operaciones = [
//   { tipo: "suma",  valor: 10 },
//   { tipo: "multi", valor: 3  },
//   { tipo: "suma",  valor: 5  },
//   { tipo: "multi", valor: 2  },
// ]

// const aplicar = {
//   suma:  (acc, val) => acc + val,
//   multi: (acc, val) => acc * val,
// }

// const res = operaciones.reduce((acc, op) => aplicar[op.tipo](acc, op.valor), 1)

// console.log(res)
// const ventas = [
//   { mes: "enero",   monto: 5000, pagado: true  },
//   { mes: "febrero", monto: 3000, pagado: false },
//   { mes: "marzo",   monto: 8000, pagado: true  },
//   { mes: "abril",   monto: 1500, pagado: true  },
// ]

// const res = ventas.reduce((acc, curr) => {
//   const key = curr.pagado ? "pagadas" : "pendientes"
//   if (!acc[key]) acc[key] = 0
//   acc[key] += curr.monto
//   return acc
// }, {})

// console.log(res)
// const crearMultiplicador = (factor) => (n) => n * factor

// const fns = [2, 3, 5].map(n => crearMultiplicador(n))

// const nums = [4, 6, 10]

// const res = nums.map(n => fns.map(fn => fn(n)))

// console.log(res[1])
const productos = [
  { nombre: "TV",     precio: 1000, stock: 0  },
  { nombre: "Radio",  precio: 300,  stock: 5  },
  { nombre: "Silla",  precio: 800,  stock: 2  },
  { nombre: "Mesa",   precio: 1500, stock: 0  },
  { nombre: "Lampara",precio: 400,  stock: 8  },
]

const res = productos
  .filter(p => p.stock > 0)
  .reduce((acc, curr) => {
    acc.cantidad += 1
    acc.valorTotal += curr.precio * curr.stock
    acc.masCaro = curr.precio > acc.masCaro.precio ? curr : acc.masCaro
    return acc
  }, { cantidad: 0, valorTotal: 0, masCaro: productos.find(p => p.stock > 0) })

console.log(res)