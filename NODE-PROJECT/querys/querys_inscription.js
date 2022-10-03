const model_inscription = require ('../models/model_inscription');

const getInscription = async(req,res)=>{
    try {
        const inscripition = await model_inscription.findAll();
        res.json(inscripition);
    } catch (error) {
        res.status(500)
    }
};

module.exports = getInscription;