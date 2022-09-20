const express = require('express');
const pool = require('./libs/postgres');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/inscripciones', async(req, res) => {
    const consult = await pool.query('select * from inscripciones')
    res.json(consult)
})

app.listen(port, () => {
    console.log('Running ' + port)
})