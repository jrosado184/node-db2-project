const db = require("../../data/db-config");

const getAll = async () => {
  return db("cars");
};

const getById = async (id) => {
  return db("cars").where({ id }).first();
};

const create = (car) => {
  return db("cars").insert(car);
};

module.exports = {
  getAll,
  getById,
  create,
};
