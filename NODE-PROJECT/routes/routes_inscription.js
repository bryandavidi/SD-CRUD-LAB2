const express = require('express')
const pool = require('../libs/postgres');
const router_inscription = express.Router()

router_inscription.get('/todos', async (req, res) => {
    const consult = await pool.query("select * from inscripciones");
    res.json(consult.rows).status(200);
});

router_inscription.post("/agregar", async (req, res) => {
	const {id_estudiante,id_materia,fecha_inscripcion} = req.body;
	pool.query('INSERT INTO inscripciones(id_estudiante,id_materia,fecha_inscripcion) VALUES ($1,$2,$3) RETURNING *',[id_estudiante,id_materia,fecha_inscripcion]);
	res.status(200).send('Materia agregada agregado');
});

router_inscription.delete('/borrar/:id_estudiante/:id_materia', async (req,res)=>{
	try {
		const { id_estudiante } = req.params;
		const { id_materia } = req.params;
		pool.query(
			`delete from inscripciones where id_estudiante = ${id_estudiante} and id_materia = ${id_materia}`
		);
		res.status(200).send('Inscripcion eliminada correctamente')
	} catch (error) {
		res.status(404).res(error);
	}
})

module.exports = router_inscription;