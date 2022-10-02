const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('sira','Bryan','Sistemasdistribuidos2022',{
    host: 'crud-sd.postgres.database.azure.com',
    dialect: 'postgres'
});

module.exports = sequelize;