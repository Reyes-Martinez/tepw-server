const express = require("express");
const cors = require("cors");
const { sequelize } = require("../database/config");
require("../database/associations");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //*Conectar db
    this.connectedDb();

    //*Api de role
    this.rolePath = "/api/role";
    this.userPath = "/api/user";

    //*Middlerware
    this.Middlerware();

    //*Rutas
    this.routes();
  }

  //*Conexion a la base de datos
  async connectedDb() {
    try {
      await sequelize.authenticate();
      console.log("Conexion exitosa");
    } catch (error) {
      console.error("Ocurrion el siguiente errro en la conexion:", error);
    }
  }

  //*Middlerware que se usaran
  Middlerware() {
    //*CORS
    this.app.use(cors());

    //*Lectura y parseo del body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.rolePath, require("../routes/role"));
    this.app.use(this.userPath, require("../routes/user"));
  }
  //*Metodo listen que iniciara el servidor
  listen() {
    this.app.listen(this.port, () => {
      console.log(
        `Servidor corriendo en el puerto ${this.port}, http://localhost:${this.port}`
      );
    });
  }
}

module.exports = Server;
