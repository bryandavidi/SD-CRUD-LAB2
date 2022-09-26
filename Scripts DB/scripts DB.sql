CREATE TYPE documento as ENUM ('Cedula', 
		'Tarjeta de identidad', 'Pasaporte');

CREATE TYPE estado_estudiante as ENUM('Matriculado', 'No matriculado', 'Aplazado');

CREATE TABLE estudiantes(
	id_estudiante NUMERIC NOT NULL,
	codigo_estudiante NUMERIC NOT NULL,
	tipo_documento  documento NOT NULL,
	numero_documento VARCHAR(10) NOT NULL,
	nombres VARCHAR(30) NOT NULL,
	apellidos VARCHAR(30) NOT NULL,
	estado estado_estudiante NOT NULL,
	CONSTRAINT estudiante_pk PRIMARY KEY (id_estudiante)
);

CREATE TABLE MATERIAS(
	id_materia NUMERIC NOT NULL,
	codigo_materia VARCHAR(10) NOT NULL,
	nombre_materia VARCHAR(50) NOT NULL,
	creditos_materia NUMERIC NOT NULL,
	cupos NUMERIC NOT NULL,
	estado_activo BOOL NOT NULL,
	CONSTRAINT materia_pk PRIMARY KEY (id_materia)
);

CREATE TABLE inscripciones(
	id_estudiante NUMERIC NOT NULL,
	id_materia NUMERIC NOT NULL,
	fecha_inscripcion TIMESTAMP NOT NULL,
	CONSTRAINT inscripcion_pk PRIMARY KEY(id_estudiante, id_materia)
);