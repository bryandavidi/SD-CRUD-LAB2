import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('sira','Bryan','Sistemasdistribuidos2022',{
    host: 'crud-sd.postgres.database.azure.com',
    dialect: 'postgres'
});