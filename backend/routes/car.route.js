const express = require("express");
const Car = require("../models/car.model");
const router = express.Router();

const { getCar } = require("../controllers/car.controller");

router.get("/", getCar);

module.exports = router;
