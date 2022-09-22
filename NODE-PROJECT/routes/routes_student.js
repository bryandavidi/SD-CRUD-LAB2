const express = require('express')
const pool = require('./libs/postgres');
const routes_student = express.Router()


routes.get('/Estudiantes', async(req, res) => {
    const consult = await pool.query('select * from estudiantes')
    res.json(consult)
})

module.exports = routes_student