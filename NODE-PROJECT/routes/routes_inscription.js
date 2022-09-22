const express = require('express')
const pool = require('./libs/postgres');
const routes_inscription = express.Router()

routes.get('/Inscripciones', async(req, res) => {
    const consult = await pool.query('select * from inscripciones')
    res.json(consult)
})

module.exports = routes_inscription