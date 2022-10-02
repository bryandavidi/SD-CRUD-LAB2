const model_course = require ('../models/model_course');

const getCourse = async(req,res)=>{
    try {
        const course = await model_course.findAll();
        console.log(course);
    } catch (error) {
        res.status(500)
    }
};

module.exports = getCourse;