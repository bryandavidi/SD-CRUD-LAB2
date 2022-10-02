const express = require('express');
const sequelize = require('./database/database')
const routes_course = require('./routes/routes_course');
const router_inscription = require('./routes/routes_inscription');
const routes_student = require('./routes/routes_student');


const port = 3000;  
const app = express();
app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('Welcome to CRUD');
// });

// app.use(sequelize.authenticate);

// app.use('/estudiante',router_student);

// app.use('/inscripciones',router_inscription);

// app.use('/materias',router_course);

// app.listen(port, () => {
//     console.log('Server Running on port ' + port)
// })
app.use('/', routes_student);
app.use('/curso',routes_course);

async function main(){
    app.listen(port)
    console.log('Servidor corriendo en el puerto : ', port)
    try {
        await sequelize.sync({force:true})
        console.log('Conexion a la base de datos Azure exitosa')
    } catch (error) {
        console.error(error, 'Conexion a la base de datos fallida')
    }

}

main();