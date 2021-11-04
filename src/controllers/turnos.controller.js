const { response } = require("express")
const turnos_models = require("../models/turnos.models")

const getTurnos =  async (req,resp) => {
    try {
        const turnosResp = await turnos_models.getTurnos()
        return resp.status(200).json({message:"Successful",listaTurnos:turnosResp})
    }catch(e){
        return resp.status(404).json(e)
    }
}
const getTurno =  async (req,resp) => {
    try {
        const id = req.params.id
        const barberia = await turnos_models.getBbarberia(id)
        return resp.status(200).json({message:"Successful",barberia:barberia})
    }catch(e){
        return resp.status(404).json(e)
    }
}
const createTurno = async (req,resp) => {
    try{
        const data = req.body
        const response = await turnos_models.createTurno(data)
        return resp.status(200).json({message:"Successful",response:response})
    }catch(e){
        return resp.status(404).json({error:e})
    }
}
const updateTurno =  async (req,resp) => {
    try {
        const data = req.body;
        const id = req.params.id;
        const response = await turnos_models.updateTurno(id,data)
        return resp.status(201).json({message:"Successful",response:response})
    }catch(e){
        return resp.status(404).json(e)
    }
}
const deleteTurno = async (req,resp) => {
    try{
        const id = req.params.id
        const response = await turnos_models.deleteTurno(id)
        return resp.status(200).json({message:"Successful",response:response})
    }catch(e){
        return resp.status(404).json(e)
    }
}
const turnosBarberia = async (req,resp) => {
    try{
        const data = req.body
        const response = await turnos_models.turnosBarberia(data.nombreBarberia)
        return resp.status(200).json({turnos:response})
    }catch(e){
        return resp.status(404).json(e)
    }
}
const turnosCliente = async (req,resp) => {
    try{
        const data = req.body
        const response = await turnos_models.turnosCliente(data.email)
        return resp.status(200).json({turnos:response})
    }catch(e){
        return resp.status(404).json(e)
    }
}






module.exports = {
    getTurnos,
    getTurno,
    createTurno,
    updateTurno,
    deleteTurno,
    turnosBarberia,
    turnosCliente
}