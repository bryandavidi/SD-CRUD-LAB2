const express = require("express");
const pool = require("../libs/postgres");

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const consult = await pool.query("select * from estudiantes");
		res.status(200).json(consult.rows);
	} catch (error) {
		res.status(404).json(error);
	}
});

router.get("/:id", async (req, res) => {
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

router.post("/", async (req, res) => {
	const body = req.body;
	console.log(body);
	const newStudent = await pool.query(
		`INSERT INTO estudiantes(id_estudiante, codigo_estudiante, tipo_documento, numero_documento, nombres, apellidos, estado) 
			VALUES (${body.id_estudiante},
			${body.codigo_estudiante}, 
            ${body.tipo_documento}, 
            ${body.numero_documento}, 
            ${body.nombres}, 
            ${body.apellidos}, 
            ${body.estado}
        );`
	);
    res.status(201).res(newStudent);
});

router.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { id_estudiante, codigo_estudiante, tipo_documento, numero_documento, nombres, apellidos, estado } = req.body;
	console.log(id_estudiante, codigo_estudiante, tipo_documento, numero_documento, nombres, apellidos, estado)
	console.log(id)
	await pool.query(`UPDATE estudiantes SET 
		id_estudiante = ${id_estudiante}, 
		codigo_estudiante = ${codigo_estudiante}, 
		tipo_documento = ${tipo_documento}, 
		numero_documento = ${numero_documento}, 
		nombres = ${nombres},
		apellidos = ${apellidos},
		estado = ${estado} WHERE id_estudiante = ${id} `);
	res.status(200).json(id);
})

module.exports = router;
