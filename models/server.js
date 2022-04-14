const express = require("express");
const cors = require("cors");
const { connectDb } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //*Conectar db
    this.connectedDb();

    //*Middlerware
    this.Middlerware();
  }

  //*Conexion a la base de datos
  async connectedDb() {
    await connectDb();
  }

  //*Middlerware que se usaran
  Middlerware() {
    //*CORS
    this.app.use(cors());

    //*Lectura y parseo del body
    this.app.use(express.json());
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
