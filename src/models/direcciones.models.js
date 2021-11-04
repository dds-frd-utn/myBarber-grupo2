const pool = require("../dataBase/database")

const getDirecciones = async () =>{
    try{
        const direcciones = await pool.query("SELECT * FROM direcciones")
        return direcciones
    }catch(e){
        return e
    }
}
const getDireccion = async (id) =>{
    try{
        const direccion = await pool.query("SELECT * FROM direcciones WHERE id_direccion=?",[id])
        return direccion
    }catch(e){
        return e
    }
}
const createDireccion = async (data) => {
    try {
        const response = await pool.query("INSERT INTO direcciones (id_barberia,nombre_calle,numero_calle) VALUES(?,?,?)", [data.id_barberia,data.nombre_calle,data.numero_calle])
        return response;
    } catch (e) {
        return e
    }
}
const updateDireccion = async (id,data) => {
    try {
        const response = await pool.query("UPDATE direcciones SET id_barberia=COALESCE(?, id_barberia), nombre_calle=COALESCE(?,nombre_calle), numero_calle=COALESCE(?,numero_calle) WHERE id_direccion = ?", [data.id_barberia, data.nombre_calle, data.numero_calle,id])
        return response;
    } catch (e) {
        return e
    }
}
const deleteDireccion = async (id) => {
    try{
        const response = await pool.query("DELETE FROM direcciones WHERE id_direccion=?",[id])
        return response
    }catch(e){
        return e
    }
}
module.exports = {
    getDirecciones,
    getDireccion,
    createDireccion,
    updateDireccion,
    deleteDireccion
}