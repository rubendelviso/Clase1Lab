const reservas = [
  { id: 1, cliente: "Ana",   hotel: "Sheraton", noches: 3, precioPorNoche: 15000, pagado: true  },
  { id: 2, cliente: "Luis",  hotel: "Hilton",   noches: 1, precioPorNoche: 22000, pagado: false },
  { id: 3, cliente: "Carla", hotel: "Sheraton", noches: 5, precioPorNoche: 15000, pagado: true  },
  { id: 4, cliente: "Pedro", hotel: "Ibis",     noches: 2, precioPorNoche: 8000,  pagado: true  },
  { id: 5, cliente: "Sofia", hotel: "Hilton",   noches: 4, precioPorNoche: 22000, pagado: false },
  { id: 6, cliente: "Juan",  hotel: "Ibis",     noches: 7, precioPorNoche: 8000,  pagado: true  },
]

const partidos = [
  { id: 1, equipo: "Tigres",  goles: [2, 1, 3], rival: "Leones"  },
  { id: 2, equipo: "Leones",  goles: [0, 1, 0], rival: "Tigres"  },
  { id: 3, equipo: "Tigres",  goles: [1, 4, 2], rival: "Aguilas" },
  { id: 4, equipo: "Aguilas", goles: [3, 3, 2], rival: "Leones"  },
  { id: 5, equipo: "Leones",  goles: [2, 2, 1], rival: "Aguilas" },
]

const empleados = [
  { id: 1, nombre: "Ana",   area: "sistemas",  sueldo: 150000, añosAntiguedad: 5  },
  { id: 2, nombre: "Luis",  area: "ventas",    sueldo: 80000,  añosAntiguedad: 2  },
  { id: 3, nombre: "Carla", area: "sistemas",  sueldo: 200000, añosAntiguedad: 8  },
  { id: 4, nombre: "Pedro", area: "ventas",    sueldo: 60000,  añosAntiguedad: 1  },
  { id: 5, nombre: "Sofia", area: "sistemas",  sueldo: 120000, añosAntiguedad: 3  },
  { id: 6, nombre: "Marta", area: "rrhh",      sueldo: 95000,  añosAntiguedad: 6  },
]
const canciones = [
  { id: 1, titulo: "Song A", artista: "Artista1", reproducciones: 5000,  genero: "rock"  },
  { id: 2, titulo: "Song B", artista: "Artista2", reproducciones: 12000, genero: "pop"   },
  { id: 3, titulo: "Song C", artista: "Artista1", reproducciones: 8000,  genero: "rock"  },
  { id: 4, titulo: "Song D", artista: "Artista3", reproducciones: 3000,  genero: "jazz"  },
  { id: 5, titulo: "Song E", artista: "Artista2", reproducciones: 20000, genero: "pop"   },
  { id: 6, titulo: "Song F", artista: "Artista1", reproducciones: 15000, genero: "rock"  },
]
//Levanto servidor

const express = require ('express');
const app = express();

const PORT =3001;
app.use(express.json())
// --------- Endpoints
app.get("/ServLevantado",(req,res)=>{
   return res.status(200).json({mensaje:"Servidor levantado bienvenido"})
})

app.get("/Hotel/Reservas/:hotel",(req,res)=>{

//     Reciba el nombre del hotel por query param (?hotel=Sheraton)
// Devuelva solo las reservas pagadas de ese hotel
// Si no hay ninguna devolvés un 404
    
    const HotelRecibido = req.params.hotel;

    const reservasTotal = reservas.reduce((acu,obj)=>
    {   acu= obj.hotel == HotelRecibido && obj.pagado?acu+ obj.precioPorNoche:acu
        return acu
    },0)

    if(!reservasTotal) return res.status(404).json({mensaje:"No existen reservas pagadas con ese hotel"})
    return res.status(200).json(reservasTotal)//Status2200000


})
app.get("/Partidos/Resumen/:equipo",(req,res)=>{
    const equipoRecibido = req.params.equipo
    const existeEquipo = partidos.find(partido =>partido.equipo == equipoRecibido) //|| partido.rival == equipoRecibido)
    if(!existeEquipo)return res.status(400).json("Datos Ingresados incorrectamente")
    const resumen = partidos.reduce((acu,curr,indice,array) => {
        //let EquipoRivalLoc= ""; 
        if(curr.equipo ==equipoRecibido ){
            // console.log("indice",indice)
            // console.log(partidos.length)

            acu.TotalPartidos++;
            acu.TotalGoles+= curr.goles.reduce((acu,obj)=>acu+=obj,0)

            return acu

        }
        if(indice== partidos.length-1){
            console.log("hola")
            // acu.TotalPartidos++;
            // acu.TotalGoles+= curr.goles.reduce(acu,obj=>acu+obj)
                
            acu.equipo =curr.equipo
            acu.PromedioGolesPorPartido =acu.TotalGoles / acu.TotalPartidos
            return acu 
            }        
        

        return acu
    },{equipo:"",TotalPartidos:0,TotalGoles:0,PromedioGolesPorPartido:0})

    res.status(200).json(resumen)

})

app.get("/Empleados/Resumen",(req,res)=>{

    const areasEncontradas = []
    const resumenEmpleados = empleados.reduce((acc,curr,ind,arr)=>{
        const key = curr.area
        if(!acc[key]){
            
            acc[key] = {cantidad:1,SueldoPromedio:curr.sueldo,hayVeteranos:(curr.añosAntiguedad>4? true:false)}
            areasEncontradas.push(key)
            
        }
        else{
            acc[key].cantidad++
            acc[key].SueldoPromedio+=curr.sueldo
            
            if(!acc[key].hayVeteranos)acc[key].hayVeteranos = curr.añosAntiguedad>4? true:false
            

        }
        if(ind==empleados.length-1){
            
            areasEncontradas.forEach(area => acc[area].SueldoPromedio/=acc[area].cantidad)
            // acc.forEach(element => {
            //     element.SueldoPromedio/=element.cantidad
            // });
            
        }
        return acc
    },{})

    res.status(200).json(resumenEmpleados)


})
app.get("/Canciones/Artista/:art",(req,res)=>{
    const artista = req.params.art
    if(!canciones.find(can =>can.artista == artista)) return res.status(404).json({mensaje:"Artista no encontrado"})
    const Reproducciones = canciones.reduce((acc,curr)=>acc+=(curr.artista==artista)?curr.reproducciones:0,0)
    const Todas = canciones.filter(cancion =>cancion.artista==artista).every(can=>can.reproducciones>4000)
    console.log(Reproducciones)
    res.status(200).json({TieneMasDeCuatroMil:Todas,
        Reproducciones:Reproducciones
    })
})

//---------- Pongo el servidor a escuchar
app.listen(PORT,(err)=>{
    if(err){
        console.log("Ups algo salio mal, cerrando servidor")
        process.exit(1);
    }
    console.log(`Servidor Levantado, escuchando en el puerto ${PORT}`)

})