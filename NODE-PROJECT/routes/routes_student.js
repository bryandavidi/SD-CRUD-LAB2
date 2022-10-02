const express = require("express");
const routes_student = express.Router();
const getStudents = require("../querys/querys_student")

routes_student.get('/estudiantes',getStudents);
routes_student.get('/estudiantes/:id');

module.exports = routes_student