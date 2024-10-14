const Car = require("../models/car.model");

const getCar = async (req, res) => {
  try {
    const car = await Car.find({});
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCar,
};
