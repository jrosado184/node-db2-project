const Cars = require("./cars-model");
const vinValidator = require("vin-validator");

const checkCarId = async (req, res, next) => {
  try {
    const carId = await Cars.getById(req.params.id);
    if (!carId) {
      res
        .status(404)
        .json({ message: `car with id ${req.params.id} is not found` });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body;
  if (!vin) {
    res.status(400).json({ message: `vin is missing` });
  } else if (!make) {
    res.status(400).json({ message: `make is missing` });
  } else if (!model) {
    res.status(400).json({ message: `model is missing` });
  } else if (!mileage) {
    res.status(400).json({ message: `mileage is missing` });
  } else {
    next();
  }
};

const checkVinNumberValid = (req, res, next) => {
  const { vin } = req.body;
  const validVin = vinValidator.validate(vin);
  if (!validVin) {
    res.status(400).json({ message: `vin ${vin} is invalid` });
  } else {
    next();
  }
};

const checkVinNumberUnique = async (req, res, next) => {
  const { vin } = req.body;
  const allCars = await Cars.getAll();
  const cars = allCars.some((c) => c.vin === vin);
  if (cars) {
    res.status(400).json({ message: `vin ${vin} already exists` });
  } else {
    next();
  }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
};
