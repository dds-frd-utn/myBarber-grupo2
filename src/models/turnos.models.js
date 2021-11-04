const pool = require("../dataBase/database")

const getTurnos = async () =>{
    try{
        const turnos = await pool.query("SELECT * FROM turnos")
        return turnos
    }catch(e){
        return e
    }
}
const getTurno = async (id) =>{
    try{
        const turno = await pool.query("SELECT id_turno,fecha,hora FROM turnos WHERE id_turno=?",[id])
        return turno
    }catch(e){
        return e
    }
}
const createTurno = async (data) => {
    try {
        const response = await pool.query("INSERT INTO turnos (id_barberia,id_cliente,fecha,hora) VALUES(?,?)", [data.id_barberia,data.id_cliente,data.fecha,data.hora])
        return response;
    } catch (e) {
        return e
    }
}
const updateTurno = async (id,data) => {
    try {
        const response = await pool.query("UPDATE turnos SET fecha=COALESCE(?, fecha), hora=COALESCE(?,hora) WHERE id_turno = ?", [data.fecha, data.hora,id])
        return response;
    } catch (e) {
        return e
    }
}
const deleteTurno = async (id) => {
    try{
        const response = await pool.query("DELETE FROM turnos WHERE id_turno=?",[id])
        return response
    }catch(e){
        return e
    }
}
const turnosBarberia = async (data) => {
    try{
        const barberia = await pool.query("SELECT id_barberia FROM barberias WHERE nombre=?",[data])
        const response = await pool.query("SELECT * FROM turnos WHERE id_barberia=?",[barberia[0].id_barberia])
        return response
    }catch(e){
        return e
    }
}
const turnosCliente = async (data) => {
    try{
        const cliente = await pool.query("SELECT id_cliente FROM clientes WHERE email=?",[data])
        const response = await pool.query("SELECT * FROM turnos WHERE id_cliente=?",[cliente[0].id_cliente])
        return response
    }catch(e){
        return e
    }
}










module.exports = {
    getTurnos,
    getTurno,
    createTurno,
    updateTurno,
    turnosBarberia,
    turnosCliente,
    deleteTurno
}