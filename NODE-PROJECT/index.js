const express = require('express');
const routes = require('./routes');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to CRUD');
});

app.use('/inscripciones',routes)

app.listen(port, () => {
    console.log('Server Running on port' + port)
})

