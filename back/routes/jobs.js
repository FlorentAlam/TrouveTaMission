const jobQueries = require('../queries/jobQueries');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const { recherche } = req.query;
    let result = await jobQueries.getJobs(recherche);
    res.json(result);
});

router.post('/', async (req, res) => {
    const { intitule, entreprise, type, content } = req.query;
    const job = {intitule, entreprise, type, content};
    let result = await jobQueries.createJob(job);
    res.json(result);
});

module.exports = router;