const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user.js');
const jobs = require('./routes/jobs.js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/user', user);
app.use('/jobs', jobs);

app.listen(3001, () => {
    console.log("listening");
});