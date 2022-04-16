const { response, request } = require("express");

const Role = require("../models/role");

const roleGet = async (req = request, res = response) => {
  const roles = await Role.findAll();
  res.json(roles);
};

const rolePost = async (req = request, res = response) => {
  const { role } = req.body;
  const newRole = new Role({ role });
  await newRole.save();
  res.json(newRole);
};

const rolePut = async (req = request, res = response) => {
  const { role, id } = req.body;
  const updateRole = Role.update({ role }, { where: { id } });
  res.json(updateRole);
};

const roleDelete = async (req = request, res = response) => {
  const { id } = req.body;
  const updateRole = Role.destroy({ where: { id } });
  res.json(updateRole);
};

module.exports = { roleGet, rolePost, rolePut, roleDelete };
