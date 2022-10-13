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
    const {id_materia,codigo_materia,nombre_materia,creditos_materia,cupos,estado_activo} = req.body;
    try {
        const course = await model_course.create({
        id_materia,
        codigo_materia,
        nombre_materia,
        creditos_materia,
        cupos,
        estado_activo
    })
        res.status(201).send('Creando materia')
    } catch (error) {
        res.status(400);
    }
};


const deleteCourse = async(req,res)=>{
    let id = req.params.id;
        try {
        const course = await model_course.destroy({
            where:{
                id_materia : id
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