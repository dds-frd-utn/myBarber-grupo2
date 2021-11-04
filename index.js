const express = require('express');
const morgan = require("morgan");
const app = express();
const cors = require("cors");
//const pool = require("./database") en models
// middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

//importo rutas
const rutasBarberias = require("./src/routes/barberias.rutas")
const rutasTurnos = require("./src/routes/turnos.rutas")
const rutasDirecciones = require("./src/routes/direcciones.rutas")
const rutasClientes = require("./src/routes/clientes.rutas")
//rutas
app.use("/barberias",rutasBarberias)
app.use("/turnos",rutasTurnos)
app.use("/direcciones",rutasDirecciones)
app.use("/clientes",rutasClientes)

app.listen(3000,function(){
    console.log("Se esta ejecutando en el puerto 3000.")
})