const pool = require('../database');

const userQueries = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM job_user', (err, res, fields) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    },
    createUser: (firebase_id, email) => {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * INTO job_user WHERE email = ?', {email}, (err, res) => {
                if(err) console.log(err);
                console.log(res);
            })
            pool.query('INSERT INTO job_user SET ?', {firebase_id, email}, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    },
    getUser: (firebase_id) => {
        console.log(firebase_id);
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM job_user WHERE firebase_id = ?', firebase_id, (err, res) => {
                if(err) reject(err);
                resolve(res);
            })
        });
    }
}

module.exports = userQueries;

