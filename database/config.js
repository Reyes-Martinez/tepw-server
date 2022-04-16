const { Sequelize } = require("sequelize");

//*Obtenciion de las variables de entorno
const database = process.env.DATABASE;
const usename = process.env.USERNAME;
const password = process.env.PASSWORD;
const host = process.env.HOST;

const sequelize = new Sequelize(database, usename, password, {
  host: host,
  dialect: "mysql",
});

module.exports = {
  sequelize,
};
