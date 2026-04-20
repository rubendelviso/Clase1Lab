console.log("Hola mundo")
//levanto un servidor y lo guardo dentro de una constante
const express = require('express') 
const app = express();
//El segundo paso fue ejecutar eso q me traje de la dependencia

//Ahora necesito definir un puerto para que escuche en alguna parte del servidor
const port = 3001
app.listen(port,(err)=>{
    if(err){
        console.log(err.message)
        process.exit(1)

    }
    console.log(`La aplicacion esta escuchando en el puerto${port}`)
 })
