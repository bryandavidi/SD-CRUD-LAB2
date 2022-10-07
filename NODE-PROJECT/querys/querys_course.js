const model_course = require ('../models/model_course');

const getCourses = async(req,res)=>{
    try {
        const courses = await model_course.findAll();
        res.json(courses);
    } catch (error) {
        res.status(500)
    }
};

const getCourseId = async(req,res)=>{
    try {
        const course = await model_course.findAll( 
            {
                where :{
                    id_materia : 999
                } 
            }
        );
        res.json(course);
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
        res.json(courses);
    } catch (error) {
        res.status(500)
    }
};

const createCourse = async(req,res)=>{
    try {
        const course = await model_course.create({
        id_materia : "999",
        codigo_materia : "1111111",
        nombre_materia :"Prueba",
        creditos_materia :"4",
        cupos : "4",
        estado_activo : true
    })

        res.send('Creando materia')
    } catch (error) {
        res.status(500);
    }
};


const deleteCourse = async(req,res)=>{
    try {
        const course = await model_course.destroy({
            where:{
                id_materia : 999
            }
        })
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