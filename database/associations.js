//* Importacion de los modulos de los modelos
const User = require("../models/user");
const User_address = require("../models/user_address");
const User_rol = require("../models/user_rol");
const Role = require("../models/role");
//*Definicion de las asociaciones

//! modelo.tipo_de_asociacion(modelo_a_asociar,{as:"tabla a asociar", forenigkey:"llave forania"})

//*Asociaciones de user y user_address
User.hasMany(User_address, { as: "user_address", foreignKey: "user_id" });
User_address.belongsTo(User, { as: "user", foreignKey: "id" });
User.hasMany(User_rol, { as: "user_rol", foreignKey: "user_id" });
User_rol.belongsTo(User, { as: "user", foreignKey: "id" });
Role.hasMany(User_rol, { as: "user_rol", foreignKey: "role_id" });
User_rol.belongsTo(Role, { as: "role", foreignKey: "id" });
