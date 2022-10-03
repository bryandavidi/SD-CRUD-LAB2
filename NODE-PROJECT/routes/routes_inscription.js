const express = require('express')
const routes_inscription = express.Router()
const getInscription = require('../querys/querys_inscription')

routes_inscription.get('/inscripciones/todas',getInscription)

module.exports = routes_inscription;