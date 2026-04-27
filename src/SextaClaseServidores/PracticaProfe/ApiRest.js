const express = require("express")
const { json } = require("node:stream/consumers")
const app = express()
const PORT =3000;
app.use(express.json());
const productos = [
  { id: 1, nombre: "Mouse", precio: 1200, stock: 10 },
  { id: 2, nombre: "Teclado", precio: 3500, stock: 0 },
  { id: 3, nombre: "Monitor", precio: 45000, stock: 3 },
  { id: 4, nombre: "Webcam", precio: 8000, stock: 5 },
  { id: 5, nombre: "Auriculares", precio: 6000, stock: 0 },
  { id: 6, nombre: "Notebook", precio: 250000, stock: 2 },
  { id: 7, nombre: "Tablet", precio: 150000, stock: 1 },
  { id: 8, nombre: "Cable HDMI", precio: 2000, stock: 20 }
]
const estudiantes = [
  { id: 1, nombre: "Ana", notas: [7, 8, 6] },
  //{ id: 2, nombre: "Luis", notas: [4, 5, 6] },
  { id: 3, nombre: "Carla", notas: [9, 8, 10] },
  { id: 4, nombre: "Pedro", notas: [6, 6, 6] },
  { id: 5, nombre: "Sofia", notas: [8, 7, 9] },
  //{ id: 6, nombre: "Juan", notas: [3, 4, 5] },
  { id: 7, nombre: "Marta", notas: [10, 10, 9] },
  { id: 8, nombre: "Diego", notas: [6, 7, 8] }
]
const ordenes = [
  { id: 1, items: ["pan", "leche"], total: 1500 },
  { id: 2, items: ["carne", "pan"], total: 4500 },
  { id: 3, items: ["verdura"], total: 800 },
  { id: 4, items: ["pan", "queso"], total: 2300 },
  { id: 5, items: ["leche", "cereal"], total: 1800 },
  { id: 6, items: ["carne", "vino"], total: 6700 },
  { id: 7, items: ["agua"], total: 600 },
  { id: 8, items: ["pan", "manteca"], total: 2100 }
]

const ventas = [
  { id: 1, cliente: "Ana", total: 1200, pagado: true },
  { id: 2, cliente: "Luis", total: 3500, pagado: false },
  { id: 3, cliente: "Carla", total: 8000, pagado: true },
  { id: 4, cliente: "Pedro", total: 1500, pagado: false },
  { id: 5, cliente: "Sofia", total: 2200, pagado: true },
  { id: 6, cliente: "Juan", total: 7000, pagado: true },
  { id: 7, cliente: "Marta", total: 500, pagado: false },
  { id: 8, cliente: "Diego", total: 9000, pagado: true }
]

//_------------------------------endpointss
app.get("/Bienvendida",(req,res)=>{
    res.status(200).json({mensaje:"Hola servidor levantado"})
})
app.get("/productos/Mayor",(req,res)=>{
    const ProduMayor = productos.find(pr=>pr.precio>10000)
    if (!ProduMayor){res.status(404).json({mensaje:"No se encontro ningun archivo con el precio mayor a 10000"});return}
    else{res.status(200).json(ProduMayor)}

})
app.get("/Estudiantes/NotasMayor",(req,res)=>{

    const estudiantesVerifica = estudiantes.every(est => est.notas.every(not=>not>=6))
    
    res.status(200).json({mensaje:estudiantesVerifica})

})

app.get("/Ordenes/Total",(req,res)=>{
    const calculandoOrdenes = ordenes.reduce((acc,curr)=>{
        if(curr["items"].includes("pan")){acc.totalconPan = curr.total+acc.totalconPan}
        if(acc.hayOrdenCara==false){
            // console.log(!acc.hayOrdenCara)
            (curr.total>6000)? acc.hayOrdenCara = !acc.hayOrdenCara:acc.hayOrdenCara}
            //console.log(!acc.hayOrdenCara)
        return acc

    },{totalconPan:0,hayOrdenCara:false})

    return res.status(200).json(calculandoOrdenes)

})

app.get("/Ventas/SumaTotal",(req,res)=>{
    const ventasTotal = ventas.reduce((acc,curr)=>{
        acc = (curr.pagado && curr.total>2000)?acc+curr.total:acc;
        return acc

    },0)
    res.status(200).json({total:ventasTotal})
})

//_------------------------------Poner la app a escuchar
app.listen(PORT,(err)=>
{if(err){console.log(err);process.exit(1);}
console.log(`Servidor levantado y escuchando en el puerto->${PORT}`)
}
)