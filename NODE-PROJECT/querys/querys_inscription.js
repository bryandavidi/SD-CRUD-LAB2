const model_inscription = require ('../models/model_inscription');

const getInscription = async(req,res)=>{
    try {
        const inscripition = await model_inscription.findAll();
        res.json(inscripition);
    } catch (error) {
        res.status(500)
    }
};


const getInscriptionId = async(req,res)=>{
    try {
        const inscription = await model_inscription.findAll( 
            {
                where :{
                    id_estudiante : 265,
                    id_materia : 242 
                } 
            }
        );
        res.json(inscription);
    } catch (error) {
        res.status(500)
    }
};


const createInscription = async(req,res)=>{
    try {
        const inscription = await model_inscription.create({
        id_estudiante : "265",
        id_materia : "242",
        fecha_inscripcion :"2021-09-16T05:02:06.000Z"
        })

        res.send('Creando Inscripcion')
    } catch (error) {
        res.status(500);
    }
};


const deleteInscription = async(req,res)=>{
    try {
        const inscripition = await model_inscription.destroy({
            where:{
                id_estudiante : 265,
                id_materia : 242
            }
        })
        console.log('Inscripcion eliminada')
    } catch (error) {
        res.status(500)
    }
};

module.exports.getInscription = getInscription;
module.exports.getInscriptionId = getInscriptionId;
module.exports.createInscription = createInscription;
module.exports.deleteInscription = deleteInscription;