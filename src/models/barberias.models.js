const pool = require("../dataBase/database")

const getBarberias = async () =>{
    try{
        const barberias = await pool.query("SELECT * FROM barberias")
        return barberias
    }catch(e){
        return e
    }
}
const getBarberia = async (id) =>{
    try{
        const barberia = await pool.query("SELECT nombre,email FROM barberias WHERE id_barberia=?",[id])
        return barberia
    }catch(e){
        return e
    }
}
const createBarberia = async (data) => {
    try {
        const response = await pool.query("INSERT INTO barberias (nombre,email,password) VALUES(?,?,?)", [data.nombre,data.email,data.nombre])
        return response;
    } catch (e) {
        return e
    }
}
const updateBarberia = async (id,data) => {
    try {
        const response = await pool.query("UPDATE barberias SET nombre=COALESCE(?, nombre), email=COALESCE(?,email), password=COALESCE(?,password) WHERE id_barberia = ?", [data.nombre, data.email, data.password,id])
        return response;
    } catch (e) {
        return e
    }
}
const deleteBarberia = async (id) => {
    try{
        const response = await pool.query("DELETE FROM barberias WHERE id_barberia=?",[id])
        return response
    }catch(e){
        return e
    }
}
module.exports = {
    getBarberias,
    getBarberia,
    createBarberia,
    updateBarberia,
    deleteBarberia
}