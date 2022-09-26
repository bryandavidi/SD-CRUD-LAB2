const express = require('express');
const routerApi = require('./routes');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ))

routerApi(app);

app.listen(port, () => {
    console.log('Server Running on port' + port)
})
