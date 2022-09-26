const express = require('express');

const routes_student = require('./routes_student');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);

    // ruta cursos
    // ruta inscripciones
    router.use('/students', routes_student);
}

module.exports = routerApi;