const model_student = require ('../models/model_student');

const getStudents = async(req,res)=>{
    try {
        const students = await model_student.findAll();
        res.json(students);
    } catch (error) {
        res.status(500)
    }
};

module.exports = getStudents;