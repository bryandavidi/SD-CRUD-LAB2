const express = require('express')
const pool = require('./libs/postgres');
const routes = express.Router()

routes.get('/', async(req, res) => {
    const consult = await pool.query('select * from inscripciones')
    res.json(consult)
})


module.exports = routes