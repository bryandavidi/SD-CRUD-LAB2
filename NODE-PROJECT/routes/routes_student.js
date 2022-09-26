const express = require("express");
const pool = require("../libs/postgres");
 
const router_student = express.Router();

router_student.get('/todos', async (req, res) => {
	const consult = await pool.query("select * from estudiantes");
	res.json(consult.rows).status(200);
});

router_student.get("/uno/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const consult = await pool.query(
			`select * from estudiantes where id_estudiante = ${id}`
		);
		res.status(200).json(consult.rows);
	} catch (error) {
		res.status(404).res(error);
	}
});

router_student.post("/agregar", async (req, res) => {
	const {id_estudiante,
	codigo_estudiante,
	tipo_documento,
	numero_documento,
	nombres,
	apellidos,
	estado} = req.body;
	pool.query('INSERT INTO estudiantes (id_estudiante,codigo_estudiante,tipo_documento,numero_documento,nombres,apellidos,estado) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',[id_estudiante,codigo_estudiante,tipo_documento,numero_documento,nombres,apellidos,estado]		);
	res.status(200).send('Estudiante agregado');
});

router_student.delete('/borrar/:id', async (req,res)=>{
	try {
		const { id } = req.params;
		pool.query(
			`delete from estudiantes where id_estudiante = ${id}`
		);
		res.status(200).send('Estudiante eliminado correctamente')
	} catch (error) {
		res.status(404).res(error);
	}
});

router_student.put("/actualizar/:nombres/:id_estudiante", async (req, res) => {
	try {
		const { nombres} = req.params;
		const { id_estudiante} = req.params;
		pool.query(
			`update estudiantes SET nombres=${nombres} where id_estudiante = ${id_estudiante}`
		);
		res.status(200).send('Estudiante Actualizado')
	} catch (error) {
		res.status(404).res(error);
	}
});



module.exports = router_student;
