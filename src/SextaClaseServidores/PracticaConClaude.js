const productos = require("../QuintaClase/productos.json")

const express =require("express")

const app = express()

const PORT = 3001;


const validaciones = {
    categoria: (prod, valor) => prod.categorias === valor,
    precioMax: (prod, valor) => prod.precio <= valor,//pelota 25<=1
    stockMin: (prod, valor) => prod.stock >= valor,
    precio: (prod, valor) => prod.precio >= valor.min,
    stock: (prod, valor) => prod.stock >= valor.min
}
app.use(express.json())
// --------------------------------Creacion de endpoints
app.get("/Bienvenido",(req,res)=>{
    res.status(200).json("Servidor Creado con exito")
})
// Creá un endpoint que reciba por query varios filtros y devuelva los productos que cumplan

app.get("/ProductosFiltrados/find",(req,res)=>{
    console.log("HOl")
   const reglasRecibidas=[
    {campo:"categoria",valor: req.query.cate},
    {campo:"precioMax",valor:req.query.precioMax},
    {campo:"stockMin",valor : req.query.stockMin}]

    const makeFunctionArr = reglasRecibidas.map(reg=>{
        return (prod)=> validaciones[reg.campo](prod,reg.valor)

    })
    makeFunctionArr.forEach(element => {console.log(element.toString())

    });

    const validarProdus = productos.filter((pr) => {
        // console.log(pr)
        return makeFunctionArr.every(func=> func(pr))

    }

    )
    //
    validarProdus
    if(validarProdus.length==0){return res.status(404).json({mensaje:"No se encontraron productos que verfiquen las validadicones"})}
    res.status(200).json(validarProdus)


})
// Creá un GET /productos/resumen que devuelva usando reduce un objeto agrupado por categoría con: cantidad de productos,
//  valor total del stock (precio * stock) y el nombre del producto más caro de esa categoría.
app.get("/Productos/resumen",(req,res)=>{
    //Recorda que el acumulador -> objeto vacio
    //curr va a ser la lista que este recorriendo
    const Resumen = productos.reduce((acc,curr)=>{
        //Me devuelve el producto si esta dentro del obj
        const key = curr.categorias
        if(!acc[key]){
            acc[key]={precio:curr.precio*curr.stock,cantidad:1,maximo:curr}

        } //Recordar forma de crear la key
        else{acc[key].precio=(curr.precio*curr.stock)+acc[key].precio
            acc[key].cantidad++
            acc[key].maximo= curr.precio>acc[key].maximo.precio?curr:acc[key].maximo
        }
        

        // acc.ValorStock=(curr.precio*curr.stock)+acc.ValorStock
        return acc

    },{
       
    })
    res.status(200).json(Resumen)
})
// 3. Creá un POST /productos/validar que reciba en el body un producto y un array de reglas y devuelva si el producto las cumple todas o cuál falló.
app.post("/productos/validar",(req,res)=>{
    //No necesito crear fallo como hice ahi sino q busco la q fallo con find 
    console.log("a")
    const ArrCompleto = req.body; //Viene el producto por separado tambien supongo
    console.log(ArrCompleto)
    const productos = ArrCompleto.producto;
    const reglas = ArrCompleto.reglas;

    const ListaFunc = reglas.map(reg=>{
        return (pr)=>pr[reg.campo]= pr[reg.campo]>reg.min

    })
    //console.log(MakeFunc.toString())
    if(ListaFunc.every(fn=>fn(productos))){res.status(200).json({mensaje:"El producto cumple con todas las reglas"})}
    else(ListaFunc.find(fn=>
        {
            if(fn(productos)==false){return res.status(400).json({mensaje:`El producto no cumple con la siguiente regla -> ${fn}`})}


        }))
})

// Creá un endpoint GET /productos/caros que devuelva todos los productos cuyo precio sea mayor al promedio de precios
//  de toda la lista. El promedio lo tenés que calcular dentro del endpoint usando reduce.

app.get("/productos/caros",(req,res)=>{
    const acumulador = productos.reduce((acc,curr)=>{
        return acc=curr.precio+acc;
    },0)
    const promedio = acumulador/productos.length
    const productosProme = productos.filter(pr=> pr.precio>promedio)
    res.status(200).json(productosProme)
})
// Ejercicio 2:
// Creá un endpoint POST /productos/agregar que reciba un producto por body y lo agregue a la lista, pero con estas validaciones:

// El precio tiene que ser mayor a 0
// El stock tiene que ser mayor a 0
// El nombre no puede ser un string vacío
// Si falla alguna validación, devolvé un 400 indicando cuál campo falló

app.post("/productos/agregar",(req,res)=>{
    const productoNuevo = req.body;
    const mensaje = "Parametros ingresados incorrectamente"
    if(productoNuevo.precio<=0){
        res.status(400).json(mensaje);
        return} 
    if(productoNuevo.stock<=0){
        res.status(400).json(mensaje);
        return}     
    if(productoNuevo.nombre==""){
        res.status(400).json(mensaje);
        return} 
    productos.push(productoNuevo)
    res.status(201).json({mensaje:"Producto agregado exitosamente"})

})
// Creá un endpoint GET /productos/buscar que reciba por query nombre y devuelva todos los productos cuyo nombre contenga ese texto,
//  sin importar mayúsculas o minúsculas. Por ejemplo ?nombre=ota debería devolver Notebook y Pelota de Fútbol.
// Pista: buscá el método includes() y toLowerCase().
app.get("/productos/buscar",(req,res)=>{

    const nombreProd = req.query.nom
    const productosFiltrados = productos.filter(pr=>{
        if(pr.nombre.toLowerCase().includes(nombreProd.toLowerCase())){
            return pr;}
    })
    if (productosFiltrados.length==0){
        res.status(404).json({mensaje:"No hay productos que coincidan con su busqueda"})
        return
    }
    
    res.status(200).json(productosFiltrados)
    return
}) 

// Ejercicio 4:
// Creá un endpoint GET /productos/stats que devuelva usando un solo reduce lo siguiente:
// json{
//     "totalProductos": 10,
//     "precioPromedio": 351500,
//     "productoMasCaro": { "nombre": "Heladera", "precio": 1500000 },
//     "productoMasBarato": { "nombre": "Pelota de Fútbol", "precio": 25000 }
// }

app.get("/productos/stats",(req,res)=>{

    const status = productos.reduce((acc,curr)=>{
    acc.totalProductos+=1
    if(acc.totalProductos==productos.length){acc.precioPromedio=acc.precioPromedio/acc.totalProductos}
    else{acc.precioPromedio=curr.precio+acc.precioPromedio}
    acc.productoCaro = curr.precio>acc.productoCaro.precio?curr:acc.productoCaro
    acc.productoBarato = curr.precio<acc.productoBarato.precio?curr:acc.productoBarato
    return acc
},{totalProductos:0,
        precioPromedio:0,
        productoCaro:productos[0],
        productoBarato:productos[0]
    })
    res.status(200).json(status)

})

// Ejercicio 5:
// Creá un endpoint DELETE /productos/categoria/:cat que elimine todos los productos que pertenezcan
//  a esa categoría y devuelva cuántos fueron eliminados y cuáles eran.

app.delete("/productos/categoria/:cat",(req,res)=>{
    const categoriaEliminar = req.params.cat
    console.log(categoriaEliminar)
    //const ProductosEliminados = []
    const ProductosFiltrados = productos.filter((pr)=>{
        if(pr.categorias==categoriaEliminar){
            return pr}
        // else{ProductosEliminados.push(pr)}
        })

        return res.status(200).json({CantidadProdsEliminados:ProductosFiltrados.length, Productos:ProductosFiltrados})

        })
// --------------------------------Levanto server

app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
        process.exit(1)


}
console.log(`Servidor Levantado con exito en el puerto${PORT}`)})