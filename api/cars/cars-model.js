const db = require("../../data/db-config");

const getAll = async () => {
  return db("cars").first();
};

const getById = (id) => {
  return db("cars").where("id", id);
};

const create = (car) => {
  return db("cars").insert(car);
};

module.exports = {
  getAll,
  getById,
  create,
};
