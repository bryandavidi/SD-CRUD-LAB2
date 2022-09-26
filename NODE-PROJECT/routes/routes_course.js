const express = require('express')
const pool = require('../libs/postgres');
const router_course = express.Router()

router_course.get('/todos', async (req, res) => {
    const consult = await pool.query("select * from materias");
    res.json(consult.rows).status(200);
});

router_course.post("/agregar", async (req, res) => {
	const {id_materia,codigo_materia,nombre_materia,creditos_materia,cupos,estado_activo} = req.body;
	pool.query('INSERT INTO materias(id_materia,codigo_materia,nombre_materia,creditos_materia,cupos,estado_activo) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',[id_materia,codigo_materia,nombre_materia,creditos_materia,cupos,estado_activo]);
	res.status(200).send('Asignatura agregada agregado');
});

router_course.delete('/borrar/:id', async (req,res)=>{
	try {
		const {id} = req.params;
		pool.query(
			`delete from materias where id_materia = ${id} `
		);
		res.status(200).send('Materia eliminada correctamente')
	} catch (error) {
		res.status(404).res(error);
	}
});


module.exports = router_course;