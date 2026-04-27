const { ref } = require('node:process');
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
    //console.log(NuevoObjet)
    //Insertar Logica para validar nuevo objeto
    
    if(isNaN(NuevoObjet)){
        return res.status(400).json({Mensaje:"Parametro Ingresado Incorrectamente"})}

    
    
    //Faltan mas validaciones pero se sobreentiende la logica
        
    productos.push(NuevoObjet);
    res.status(201).json({mensaje:"Objeto guardado con exito"})
     
    
})

app.delete('/EliminarObjeto/:num',(req,res)=>{
    const RefEliminarObjeto = req.params.num;
    
    const FnElimina =(produRecibi) =>productos.find(pr=>pr.id ==produRecibi)
    
    // const verificaCont =(FnElimina(RefEliminarObjeto)==undefined)
    
    if (FnElimina(RefEliminarObjeto)==undefined){
        res.status(500).json({mensaje:"No se completo la operacion"})
        //res.status(404).json({mensaje:"No se encontro el objeto"})// En realidad es 500
        return
    }
    productos.pop(FnElimina(RefEliminarObjeto))
    res.status(200).json({mensaje:"Objeto borrado con exito"})
    
})

app.put('/CambiarObjeto/:id',(req,res)=>{

    //Esto esta mal es con indice, el camino es sacar indice y despues implementar logica

    const idObjeto = req.params.id
    // isNaN(idObjeto)==true?res.status(400).json({mensaje:"El id tiene q ser numerico"}):req
    const Modificacion = req.body
    const EncontrarObjeto =()=>productos.find(pr=>pr.id ==idObjeto)
    if(EncontrarObjeto(idObjeto)==undefined)
        {res.status(400).json({mensaje:"El parametro q ingreso no esta asociado a ningun producto"});
        return}
    
    
    productos.map(pr=>{
        if(pr ==EncontrarObjeto()){
            const IndEncontr = productos.findIndex(pr=>pr.id==idObjeto);
            productos[IndEncontr] = Modificacion;
            res.status(200).json({mensaje:"Se inserto correctamente el producto"})
        
        }
        
        })
    
})

//----------------Pongo la app a escuchar---------------

app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
        process.exit(1);

}
    console.log(`Server escuchando en el PORT:${PORT}`)

})