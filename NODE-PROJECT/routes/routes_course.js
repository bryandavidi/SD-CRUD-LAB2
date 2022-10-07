const express = require('express');
const routes_course = express.Router();
const { getCourses, getCourseId, getCourseData, deleteCourse, createCourse } = require('../querys/querys_course');

routes_course.get('/materias/todas',getCourses);
routes_course.get('/materias/id',getCourseId);
routes_course.get('/materias/datos',getCourseData);
routes_course.post('/materias/crear',createCourse);
routes_course.delete('/materias/eliminar',deleteCourse);

module.exports = routes_course;