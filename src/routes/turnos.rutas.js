const express = require('express')
const router = express.Router()
const turnos_controller = require("../controllers/turnos.controller")

//CRUD
router.get("/",turnos_controller.getTurnos)
router.get("/:id",turnos_controller.getTurno)
router.post("/",turnos_controller.createTurno)
router.put('/:id', turnos_controller.updateTurno)
router.delete("/:id",turnos_controller.deleteTurno)
//Especificos
router.post("/turnosBarberia",turnos_controller.turnosBarberia)
router.post("/turnosCliente",turnos_controller.turnosCliente)
module.exports = router