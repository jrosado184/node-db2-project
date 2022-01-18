// DO YOUR MAGIC
const Cars = require("./cars-model");
const router = require("express").Router();

router.get("/", (req, res, next) => {
  Cars.getAll().then((cars) => {
    res.json(cars);
  });
});
router.get("/:id", (req, res) => {});
router.post("/", (req, res) => {});

module.exports = router;
