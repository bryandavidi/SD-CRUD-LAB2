const model_student = require ('../models/model_student');

const getStudents = async(req,res)=>{
    try {
        const students = await model_student.findAll();
        res.json(students);
    } catch (error) {
        res.status(500)
    }
};

const getStudentsId = async(req,res)=>{
    try {
        const students = await model_student.findAll( 
            {
                where :{
                    id_estudiante : 999
                } 
            }
        );
        res.json(students);
    } catch (error) {
        res.status(500)
    }
};

const getStudentsIdCC = async(req,res)=>{
    try {
        const students = await model_student.findAll( 
            {
                attributes : ['nombres','apellidos','codigo_estudiante','numero_documento' ]
            }
        );
        res.json(students);
    } catch (error) {
        res.status(500)
    }
};

const createStudent = async(req,res)=>{
    try {
        const students = await model_student.create({
        id_estudiante : "995",
        codigo_estudiante : "201910225",
        tipo_documento :"Cedula",
        numero_documento :"10109101",
        nombres : "Bryan David ",
        apellidos :"Ibanez",
        estado :"Matriculado"})

        res.send('Creando estudiante')
    } catch (error) {
        res.status(500);
    }
};


const deleteStudent = async(req,res)=>{
    try {
        const students = await model_student.destroy({
            where:{
                id_estudiante : 999
            }
        })
        console.log('Estudiante eliminado')
    } catch (error) {
        res.status(500)
    }
};



module.exports.getStudents = getStudents;
module.exports.getStudentsId = getStudentsId;
module.exports.getStudentsIdCC = getStudentsIdCC;
module.exports.createStudent = createStudent;
module.exports.deleteStudent = deleteStudent;


