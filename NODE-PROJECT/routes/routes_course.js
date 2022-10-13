const express = require('express');
const routes_course = express.Router();
const { getCourses, getCourseId, getCourseData, deleteCourse, createCourse } = require('../querys/querys_course');

routes_course.get('/materias/todas',getCourses);
routes_course.get('/materias/id/:id',getCourseId);
routes_course.get('/materias/datos',getCourseData);
routes_course.post('/materias/crear/:id/:codigo/:nombre/:creditos/:cupos/:estado',createCourse);
routes_course.delete('/materias/eliminar/:id ',deleteCourse);

module.exports = routes_course;