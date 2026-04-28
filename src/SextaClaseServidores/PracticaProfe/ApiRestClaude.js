//Ejercicio generado con claude
const equipos = [
  { id: 1, nombre: "Tigres",   jugadores: ["Ana", "Luis", "Carla"], victorias: 8, derrotas: 2 },
  { id: 2, nombre: "Leones",   jugadores: ["Pedro", "Sofia"],       victorias: 5, derrotas: 5 },
  { id: 3, nombre: "Aguilas",  jugadores: ["Juan", "Marta", "Diego", "Pablo"], victorias: 10, derrotas: 0 },
  { id: 4, nombre: "Panteras", jugadores: ["Rosa", "Carlos"],       victorias: 3, derrotas: 7 },
 ]
 const pedidos = [
  { id: 1, cliente: "Ana",   productos: ["laptop", "mouse"],   estado: "entregado", total: 85000 },
  { id: 2, cliente: "Luis",  productos: ["teclado"],           estado: "pendiente", total: 3500  },
  { id: 3, cliente: "Ana",   productos: ["monitor", "hdmi"],   estado: "entregado", total: 47000 },
  { id: 4, cliente: "Carla", productos: ["mouse", "pad"],      estado: "cancelado", total: 2800  },
  { id: 5, cliente: "Luis",  productos: ["notebook"],          estado: "entregado", total: 250000},
  { id: 6, cliente: "Ana",   productos: ["webcam"],            estado: "pendiente", total: 8000  },
]
// Implementá un endpoint GET /equipos/ranking que devuelva los equipos ordenados de mayor a menor victorias, 
// pero solo los que tengan más victorias que derrotas y al menos 3 jugadores. De cada equipo devolvés solo nombre, victorias y cantidadJugadores.

const express = require("express");
const { ref } = require("node:process");
const app = express();
app.use(express.json())
const PORT =3000;


//Ahora los endpoints
// Implementá un endpoint GET /pedidos/cliente/:nombre que devuelva un resumen del cliente usando un único reduce:
app.get("/pedidos/cliente/:nombre",(req,res)=>{
    const refCliente = req.params.nombre;
    let VerificadorPersona = false;//Verifica q entro y q no se repita la persona, pq hay nombres repetidos
    const ClienteEncontrado = pedidos.find(ped =>ped.cliente ==refCliente)
    if(!ClienteEncontrado)return res.status(404).json({mensaje:"No se encontro el cliente con el nombre asociado"})
    const PedidoCompleto = pedidos.reduce((acc,cliente)=>{
        if(!VerificadorPersona && cliente.cliente == refCliente){
            console.log("hol")
            acc.cliente = cliente.cliente
            acc.totalGastado = pedidos.reduce((acc,curr)=>{ return acc =( cliente.cliente==curr.cliente)?acc+curr.total:acc},0)
            acc.pedidosEntregados = pedidos.filter(ped=> ped.cliente == cliente.cliente && ped.estado == "entregado").length
            acc.tienePendientes = pedidos.some(ped=>(ped.cliente ==cliente.cliente && ped.estado=="pendiente"))
            
            VerificadorPersona = !VerificadorPersona;
        }
        return acc

    },{cliente:"",totalGastado:0,pedidosEntregados:0,tienePendientes:false})
    res.status(200).json(PedidoCompleto)
})

app.listen(PORT,(err)=>{
    if(err)
        {console.log(err);
        procces.exit(1)}
    console.log(`Servidor levantado y escuchando en el puerto ${PORT}`)
    }
    )
    

