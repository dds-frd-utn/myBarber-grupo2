const direcciones_models = require("../models/direcciones.models")

const getDirecciones =  async (req,resp) => {
    try {
        const direccionesResp = await direcciones_models.getDirecciones()
        return resp.status(200).json({message:"Successful",listaDirecciones:direccionesResp})
    }catch(e){
        return resp.status(404).json(e)
    }
}
const getDireccion =  async (req,resp) => {
    try {
        const id = req.params.id
        const barberia = await direcciones_models.getBbarberia(id)
        return resp.status(200).json({message:"Successful",barberia:barberia})
    }catch(e){
        return resp.status(404).json(e)
    }
}
const createDireccion = async (req,resp) => {
    try{
        const data = req.body
        const response = await direcciones_models.createDireccion(data)
        return resp.status(200).json({message:"Successful",response:response})
    }catch(e){
        return resp.status(404).json({error:e})
    }
}
const updateDireccion =  async (req,resp) => {
    try {
        const data = req.body;
        const id = req.params.id;
        const response = await direcciones_models.updateDireccion(id,data)
        return resp.status(201).json({message:"Successful",response:response})
    }catch(e){
        return resp.status(404).json(e)
    }
}
const deleteDireccion = async (req,resp) => {
    try{
        const id = req.params.id
        const response = await direcciones_models.deleteDireccion(id)
        return resp.status(200).json({message:"Successful",response:response})
    }catch(e){
        return resp.status(404).json(e)
    }
}
module.exports = {
    getDirecciones,
    getDireccion,
    createDireccion,
    updateDireccion,
    deleteDireccion
}