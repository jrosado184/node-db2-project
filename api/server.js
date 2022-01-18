const carsRouter = require("./cars/cars-router");

const express = require("express");

const server = express();

server.use(express.json());
server.use("/api/cars", carsRouter);

module.exports = server;
