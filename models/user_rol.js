const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");
const User_rol = sequelize.define(
  "user_rol",
  {
    role_id: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    //* omitir campos de created_at y update_at
    timestamps: false,
    //* concervamos el mismo nombre de la tabla sin pluralizarlo
    freezeTableName: true,
  }
);

module.exports = User_rol;
