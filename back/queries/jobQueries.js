const pool = require('../database');

const jobQueries = {
    getJobs: (recherche) => {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM job_annonce WHERE intitule LIKE '%${recherche}%' OR entreprise LIKE '%${recherche}%'`, (err, res, fields) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    },
    createJob: (job) => {
        return new Promise((resolve, reject) => {
            console.log(job);
            pool.query('INSERT INTO job_annonce SET ?', {...job}, (err, res) => {
                if(err) reject(err);
                resolve(res);
            });
        });
    }
}

module.exports = jobQueries;

