const model_course = require ('../models/model_course');

const getCourses = async(req,res)=>{
    try {
        const courses = await model_course.findAll();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500)
    }
};

const getCourseId = async(req,res)=>{
    let id = req.params.id;
    try {
        const course = await model_course.findAll( 
            {
                where :{
                    id_materia : id
                } 
            }
        );
        res.status(200).json(course);
    } catch (error) {
        res.status(500)
    }
};

const getCourseData = async(req,res)=>{
    try {
        const courses = await model_course.findAll( 
            {
                attributes : ['nombre_materia','cupos']
            }
        );
        res.status(200).json(courses);
    } catch (error) {
        res.status(500)
    }
};

const createCourse = async(req,res)=>{
    var data = req.body;
    try {
        const course = await model_course.create({
        id_materia : data.id_materia,
        codigo_materia : "1111111",
        nombre_materia :"Prueba",
        creditos_materia :"4",
        cupos : "4",
        estado_activo : true
    })

        res.status(201).send('Creando materia')
    } catch (error) {
        res.status(400);
    }
};


const deleteCourse = async(req,res)=>{
    try {
        const course = await model_course.destroy({
            where:{
                id_materia : 999
            }
        })
        res.status(202)
        console.log('Materia eliminada')
    } catch (error) {
        res.status(500)
    }
};


module.exports.getCourses = getCourses;
module.exports.getCourseId = getCourseId;
module.exports.getCourseData = getCourseData;
module.exports.createCourse = createCourse;
module.exports.deleteCourse = deleteCourse;