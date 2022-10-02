const express = require('express')
const routes_course = express.Router()
const getCourse = require('../querys/querys_course')

routes_course.get('/todos',getCourse)

module.exports = routes_course;