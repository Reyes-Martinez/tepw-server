const { Sequelize } = require("sequelize");

//*Obtenciion de las variables de entorno
const database = process.env.DATABASE;
const usename = process.env.USERNAME;
const password = process.env.PASSWORD;
const host = process.env.HOST;

//*Conexion a la base de datos
const connectDb = async () => {
  try {
    const sequelize = new Sequelize(database, usename, password, {
      host: host,
      dialect: "mysql",
    });
    await sequelize.authenticate();
    console.log("Conexion exitosa");
  } catch (error) {
    console.error("Ocurrion el siguiente errro en la conexion:", error);
  }
};

module.exports = {
  connectDb,
};
