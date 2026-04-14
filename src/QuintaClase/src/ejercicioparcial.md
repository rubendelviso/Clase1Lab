Buenísimo, esto que estás viendo es nivel parcial posta, así que te armo ejercicios bien en esa línea: con closures, funciones de orden superior y reduce, y con enunciado como te tomarían 👇

🧪 Ejercicio 1 — Filtros dinámicos con closures
📝 Enunciado

Dado un arreglo de objetos usuarios, donde cada usuario tiene las propiedades:

edad
nombre
activo (booleano)

Y un arreglo de condiciones reglas con el formato:

{ campo: "edad", valor: 18 }

Se pide:

Construir dinámicamente un conjunto de funciones de validación usando closures, a partir del arreglo reglas.
Aplicar dichas funciones para obtener un nuevo arreglo con los usuarios que cumplen todas las condiciones.
No hardcodear ninguna validación (todo debe salir del objeto de reglas).
🎯 Pista

👉 Vas a hacer algo MUY parecido a lo que ya hiciste con validacionesOtras
👉 Pensá en:

map → para crear funciones
every → para validar todas
🧪 Ejercicio 2 — Función generadora de operaciones
📝 Enunciado

Implementar una función crearOperacion que:

reciba una función fn
devuelva otra función que reciba un valor x
y aplique la función fn sobre x, pero sumándole un valor fijo definido previamente

Ejemplo esperado:

const op = crearOperacion((x, y) => x * y, 2);
op(3) // → 6
🎯 Pista

👉 Esto es:

función de orden superior
closure
👉 Muy parecido a tu execE
----------------------------------------
🧪 Ejercicio 3 — Agrupación con reduce (clave)
📝 Enunciado

Dado un arreglo de productos con:

categoria
precio
stock

Se pide usar reduce para obtener un objeto con esta forma:

{
  tecnologia: 50000,
  audio: 20000,
  deportivo: 15000
}

👉 Donde cada valor representa:

la suma total de (precio * stock) por categoría

🎯 Pista

👉 Esto es lo que ya intentaste pero mejorado

Pensá:

acc arranca como {}
si la categoría no existe → crearla
si existe → acumular
----------------------------------------
🧪 Ejercicio 4 — Máximo y mínimo con reduce
📝 Enunciado

A partir del mismo arreglo de productos, obtener:

El producto con mayor precio
El producto con menor stock

Usando únicamente reduce.

🎯 Pista

👉 En vez de guardar solo un número:
guardá el objeto completo
----------------------------------------
🧪 Ejercicio 5 — Pipeline funcional
📝 Enunciado

Dado un arreglo de productos, realizar las siguientes operaciones:

Filtrar productos con stock mayor a 50
Transformarlos a solo { nombre, total } donde total = precio * stock
Obtener la suma total de todos los total
🎯 Pista

👉 Acá combinás:

filter
map
reduce
🧪 Ejercicio 6 — Implementar tu propio reduce (nivel dios)
📝 Enunciado

Implementar una función:

miReduce(array, fn, valorInicial)

Que se comporte igual que .reduce()

🎯 Pista

👉 Necesitás:

un acumulador
un loop (for)
aplicar fn(acc, elemento)
🔥 Bonus tipo parcial (conceptual)
❓ Pregunta

Explicá con tus palabras:

¿Por qué el uso de closures permite desacoplar la lógica de validación de los datos?
recuerda y puede acceder a variables de su entorno, incluso después de que ese entorno ya terminó de ejecutarse

🎯 Qué esperan

👉 Que digas algo como:

permite parametrizar comportamiento
evita hardcodear
reutilización de funciones
💡 Si querés subir de nivel

Después de que intentes alguno:

pegá tu solución
y te la corrijo como profe (sin regalarte todo 😄)