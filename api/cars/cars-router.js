// DO YOUR MAGIC
const Cars = require("./cars-model");
const router = require("express").Router();
const { checkCarId } = require("./cars-middleware");

router.get("/", (req, res, next) => {
  Cars.getAll()
    .then((cars) => {
      res.json(cars);
    })
    .catch(next);
});
router.get("/:id", checkCarId, (req, res, next) => {
  Cars.getById(req.params.id)
    .then((cars) => {
      res.json(cars);
    })
    .catch(next);
});
router.post("/", (req, res) => {});

module.exports = router;
