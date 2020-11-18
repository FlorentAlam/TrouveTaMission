const userQueries = require('../queries/userQueries');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const { uid } = JSON.parse(req.query.user);
    let result = await userQueries.getUser(uid);
    res.json(result);
});

router.post('/', async (req, res) => {
    const { uid, email } = req.body.user;
    console.log(await userQueries.createUser(uid, email));
});

router.put('/', (req, res) => {

});

module.exports = router;