console.log("Hola mundo")
//levanto un servidor y lo guardo dentro de una constante
const express = require('express') 
const app = express();
//El segundo paso fue ejecutar eso q me traje de la dependencia

const productos = require('../QuintaClase/productos.json')


//Ahora necesito definir un puerto para que escuche en alguna parte del servidor
const port = 3001
app.use(express.json());    
//Aca irían todos mis endpoints  !!!Poner antes del listen
app.get('/PrimerEndPoint',(req,res)=>{//Este endpoint devuelve 
    

    //Corriendo de manera locan en el puerto 3001 por ahora
    res.status(200).json({mensaje:"Primer Endpoint Probando"});
    //Debería devolver lista completa de productos
}


);
app.get('/Productos',(req,res)=>{
    res.status(200).json({productos})



})

//Instalar thunderClient o postman para verificar los endpoints

//Aca empiezo los endpoints
//  Quiero encontrar el producto que coincida con un id pero que sea uno cualquiera
app.get('/ProductoNumero/:num',(req,res)=>{
    const id = req.params.num
    if(isNaN(id)){
        res.status(400).json({mensaje:`El parametro ingresado es incorrecto`})
        return//Sin el return va a volver a ejecutar indefinidamente

    }
    //Agregar validacion para el id q reciba 
    const AlumnoEncontrado = productos.find(prod => prod.id == id)
    if(!AlumnoEncontrado){res.status(404).json({
        
        mensaje:`Producto no Encontrado`})
        return 
    
    
    }
    res.status(200).json(AlumnoEncontrado)

})

//Agregar consulta de categorias particularmente
app.get('/categorias',(req,res)=>{
    const ListValida = [];
    const CategoriasEncontr = productos.map(prod =>{ 
        return prod.categorias
        // if(prod.categorias)ListValida.push(prod)

    
    })
    CategoriasEncontr.reduce((access,curr)=>{
        if (access.find(prod =>prod == curr))return access
        //         acu->Listavacia   Categorias normales
        access.push(curr)
        return access

    },ListValida)

    res.status(200).json({ListValida})

})

app.get('/productos/categorias/find',(req,res)=>{

    //Quiero buscar todos aquellos que cumplan la categoria que pongo como condicion en la key
    const categorias = req.query.key //Guardado la cate 
    // console.log(categorias) 
    const categoriasFiltradas = productos.filter(prod=>prod.categorias == categorias)
    // res.status(200).json({mensaje:`Los productos que busca son ${categoriasFiltradas}`})
    res.status(200).json(categoriasFiltradas)
    
})

//---------------------------------------------------------------

//El listen es lo ultimo q va a hacer 
app.listen(port,(err)=>{
    if(err){
        console.log(err.message)
        process.exit(1)

    }
    console.log(`La aplicacion esta escuchando en el puerto${port}`)
 })
