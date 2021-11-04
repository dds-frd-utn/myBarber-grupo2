const mysql = require('mysql');
const {promisify} = require('util');

// var connection = mysql.createConnection()
var config = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    database:'dds_tp3',
    multipleStatements:true
}
const pool = mysql.createPool(config);

pool.getConnection((err, connection)=>{
    console.log(1)
    if (err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        else if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        else if(err.code === 'ECONNREFUSED'){
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
        else if(err.code === 'ER_ACCESS_DENIED_ERROR'){
            console.error('Problemas con los certificado de la base de datos');
        }
        else if(err.code === 'ER_USER_LIMIT_REACHED'){
            console.error('Conexion limitada');
        }else if (err.code === 'ENOTFOUND'){
            console.error('Error de conexion');
        }
    }
    if(connection){
        console.log('DB is CONNECTED');
        connection.release();
    }else{
        console.log('DB is NOT CONNECTED');
    }
    return;
});

pool.query = promisify(pool.query);
module.exports = pool