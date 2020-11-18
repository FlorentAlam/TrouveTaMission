const mysql = require('mysql');
const util = require('util');
const secret = require('./secret.js');
const pool = mysql.createPool({
    connectionLimit: 10,
    ...secret.db
});

pool.getConnection((err, connexion) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('La connexion à la base de données à été perdue.');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.log('Trop de connexions à la base de données.');
        }
        if(err.code === 'ECONNREFUSED'){
            console.log('La connexion à la base de données a été refusée.');
        }
    }
    if(connexion) connexion.release();
    return;
});

pool.query = util.promisify(pool.query);

module.exports = pool;