const pool = require("../dataBase/database")

const getClientes = async () =>{
    try{
        const clientes = await pool.query("SELECT * FROM clientes")
        return clientes
    }catch(e){
        return e
    }
}
const getCliente = async (id) =>{
    try{
        const cliente = await pool.query("SELECT nombre,apellido,email FROM clientes WHERE id_cliente=?",[id])
        return cliente
    }catch(e){
        return e
    }
}
const createCliente = async (data) => {
    try {
        const response = await pool.query("INSERT INTO clientes (nombre,apellido,email) VALUES(?,?,?)", [data.nombre,data.apellido,data.email])
        return response;
    } catch (e) {
        return e
    }
}
const updateCliente = async (id,data) => {
    try {
        const response = await pool.query("UPDATE clientes SET nombre=COALESCE(?, nombre), apellido=COALESCE(?, apellido),email=COALESCE(?,email) WHERE id_cliente = ?", [data.nombre,data.apellido,data.email,id])
        return response;
    } catch (e) {
        return e
    }
}
const deleteCliente = async (id) => {
    try{
        const response = await pool.query("DELETE FROM clientes WHERE id_cliente=?",[id])
        return response
    }catch(e){
        return e
    }
}




module.exports = {
    getClientes,
    getCliente,
    createCliente,
    updateCliente,
    deleteCliente
}