const model_student = require ('../models/model_student');

const getStudents = async(req,res)=>{
    try {
        const students = await model_student.findAll();
        res.status(200).json(students);
    } catch (error) {
        res.status(500)
    }
};

const getStudentsId = async(req,res)=>{
    let id = req.params.id;
    try {
        const students = await model_student.findAll( 
            {
                where :{
                    id_estudiante : id
                } 
            }
        );
        res.status(200).json(students);
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
        res.status(200).json(students);
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

        res.status(201).send('Creando estudiante')
    } catch (error) {
        res.status(400);
    }
};


const deleteStudent = async(req,res)=>{
    let id = req.params.id;
    try {
        const students = await model_student.destroy({
            where:{
                id_estudiante : id ,
            }
        })
        res.status(202)
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


