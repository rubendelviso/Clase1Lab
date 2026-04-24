const productos = require('../QuintaClase/productos.json')

const express = require('express')

const app = express();

const PORT =3002;

app.use(express.json())

// ---------------------Ahora creo endpoints------------

app.get('/NuevoServidor',(req,res)=>{

    res.status(200).json({mensaje:"Creando nuevo servidor"})
})

app.post('/NuevoObjeto',(req,res)=>{
    const NuevoObjet = req.body
    console.log(NuevoObjet)
    //Insertar Logica para validar nuevo objeto
    const verificaId = (prod) => {
        if(isNaN(prod.id)){return false}

    //---------------------
    if (!verificaId(NuevoObjet)){
        console.log("No se pudo guardar nuevo objeto")
        return}
    productos.push(NuevoObjet)
    


}})


//----------------Pongo la app a escuchar---------------

app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
        process.exit(1);

}
    console.log(`Server escuchando en el PORT:${PORT}`)

})