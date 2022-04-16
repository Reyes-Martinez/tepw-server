const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");
//* ejemplo de la definicion del modelo
//* sequelize.define("nombre de la tabla en singular",{atributos de la tabla},{configuracione opcionales }
const Role = sequelize.define(
  "role",
  {
    role: {
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

module.exports = Role;
