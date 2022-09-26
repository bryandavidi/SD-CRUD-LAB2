const express = require('express')
const pool = require('../libs/postgres');

const router = express.Router()

router.get('/', async(req, res) => {
    const consult = await pool.query('select * from estudiantes')
    res.status(200).json(consult.rows);
})

module.exports = router