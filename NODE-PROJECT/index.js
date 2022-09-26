const express = require('express');
const routerApi = require('./routes');
const port = 3000;

const app = express();

routerApi(app);

app.listen(port, () => {
    console.log('Server Running on port' + port)
})
