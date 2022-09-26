const express = require('express');
const routes_course = require('./routes/routes_course');
const routes_inscription = require('./routes/routes_inscription');
const routes_student = require('./routes/routes_student');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to CRUD');
});

routerApi(app);

app.listen(port, () => {
    console.log('Server Running on port' + port)
})
