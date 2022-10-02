const express = require('express');
const sequelize = require('./database/database');
const router_course = require('./routes/routes_course');
const router_inscription = require('./routes/routes_inscription');
const router_student = require('./routes/routes_student');


const port = 3000;  
const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to CRUD');
});

app.use('/estudiante',router_student);

app.use('/inscripciones',router_inscription);

app.use('/materias',router_course);

app.use(sequelize.authenticate);

app.listen(port, () => {
    console.log('Server Running on port ' + port)
})
