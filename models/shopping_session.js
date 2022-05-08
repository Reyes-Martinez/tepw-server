const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");
const Shopping_session = sequelize.define(
  "shopping_session",
  {
    user_id: {
      type: DataTypes.INTEGER,
    },
    total: {
      type: DataTypes.DECIMAL,
    },
  },
  {
    //* omitir campos de created_at y update_at
    timestamps: false,
    //* concervamos el mismo nombre de la tabla sin pluralizarlo
    freezeTableName: true,
  }
);

module.exports = Shopping_session;
