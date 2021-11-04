const barberias_models = require("../models/barberias.models")

const getBarberias =  async (req,resp) => {
    try {
        const barberiasResp = await barberias_models.getBarberias()
        return resp.status(200).json({message:"Successful",listaBarberias:barberiasResp})
    }catch(e){
        return resp.status(404).json(e)
    }
}
const getBarberia =  async (req,resp) => {
    try {
        const id = req.params.id
        const barberia = await barberias_models.getBarberia(id)
        return resp.status(200).json({message:"Successful",barberia:barberia})
    }catch(e){
        return resp.status(404).json(e)
    }
}
const createBarberia = async (req,resp) => {
    try{
        const data = req.body
        const response = await barberias_models.createBarberia(data)
        return resp.status(200).json({message:"Successful",response:response})
    }catch(e){
        return resp.status(404).json({error:e})
    }
}
const updateBarberia =  async (req,resp) => {
    try {
        const data = req.body;
        const id = req.params.id;
        const response = await barberias_models.updateBarberia(id,data)
        return resp.status(201).json({message:"Successful",response:response})
    }catch(e){
        return resp.status(404).json(e)
    }
}
const deleteBarberia = async (req,resp) => {
    try{
        const id = req.params.id
        const response = await barberias_models.deleteBarberia(id)
        return resp.status(200).json({message:"Successful",response:response})
    }catch(e){
        return resp.status(404).json(e)
    }
}
module.exports = {
    getBarberias,
    getBarberia,
    createBarberia,
    updateBarberia,
    deleteBarberia
}