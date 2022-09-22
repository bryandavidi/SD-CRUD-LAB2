const express = require('express')
const pool = require('./libs/postgres');
const routes_course = express.Router()

routes.get('/Cursos', async(req, res) => {
    const consult = await pool.query('select * cursos')
    res.json(consult)
})

module.exports = routes_course