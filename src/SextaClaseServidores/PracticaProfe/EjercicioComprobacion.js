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


const nums = [2, 3, 6]

const fns = [
  n => n + 1,
  n => n % 2 === 0,
  n => n * 3
]

const res = nums
  .map(n => fns.map(fn => fn(n)))
  .filter(arr => arr[1])
  .map(arr => arr[0] + arr[2])

console.log(res)