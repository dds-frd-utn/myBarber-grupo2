const clientes_models = require("../models/clientes.models")

const getClientes =  async (req,resp) => {
    try {
        const clientesResp = await clientes_models.getClientes()
        return resp.status(200).json({message:"Successful",listaClientes:clientesResp})
    }catch(e){
        return resp.status(404).json(e)
    }
}
const getCliente =  async (req,resp) => {
    try {
        const id = req.params.id
        const cliente = await clientes_models.getCliente(id)
        return resp.status(200).json({message:"Successful",cliente:cliente})
    }catch(e){
        return resp.status(404).json(e)
    }
}
const createCliente = async (req,resp) => {
    try{
        const data = req.body
        const response = await clientes_models.createCliente(data)
        return resp.status(200).json({message:"Successful",response:response})
    }catch(e){
        return resp.status(404).json(e)
    }
}
const updateCliente =  async (req,resp) => {
    try {
        const data = req.body;
        const id = req.params.id;
        const response = await clientes_models.updateCliente(id,data)
        return resp.status(201).json({message:"Successful",response:response})
    }catch(e){
        return resp.status(404).json(e)
    }
}
const deleteCliente = async (req,resp) => {
    try{
        const id = req.params.id
        const response = await clientes_models.deleteCliente(id)
        return resp.status(200).json({message:"Successful",response:response})
    }catch(e){
        return resp.status(404).json(e)
    }
}
module.exports = {
    getClientes,
    getCliente,
    createCliente,
    updateCliente,
    deleteCliente
}