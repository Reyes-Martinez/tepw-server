const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");
//* sequelize.define("nombre de la tabla en singular",{atributos de la tabla},{configuracione opcionales }
const User = sequelize.define(
  "user",
  {
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    telephone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    //* omitir campos de created_at y update_at
    timestamps: false,
    //* concervamos el mismo nombre de la tabla sin pluralizarlo
    freezeTableName: true,
  }
);
module.exports = User;
