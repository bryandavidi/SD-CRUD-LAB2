const express = require('express')
const pool = require('./libs/postgres');
const routes = express.Router()

routes.get('/estudiantes', async(req, res) => {
    const consult = await pool.query('select * from estudiantes')
    res.json(consult)
})

routes.get('/materias', async(req, res) => {
    const consult = await pool.query('select * from materias')
    res.json(consult)
})


module.exports = routes