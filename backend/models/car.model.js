const mongoose = require("mongoose");

const CarSchema = mongoose.Schema(
  {
    make: {
      type: String,
      required: [true, "Please enter the car make (e.g., Toyota, Honda)"],
    },
    model: {
      type: String,
      required: [true, "Please enter the car model (e.g., Corolla, Civic)"],
    },
    year: {
      type: Number,
      required: [true, "Please enter the car's manufacturing year"],
    },
    price: {
      type: Number,
      required: [true, "Please enter the car's price"],
    },
    mileage: {
      type: Number,
      required: [true, "Please enter the car's mileage"],
    },
    color: {
      type: String,
      required: [true, "Please enter the car's color"],
    },
    image: {
      type: String,
      required: false, // Optional image field for the car's photo
    },
    status: {
      type: String,
      enum: ["available", "sold", "pending"],
      default: "available", // Cars can be available, sold, or pending sale
    },
    description: {
      type: String,
      required: false, // Optional field to provide additional car details
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

const Car = mongoose.model("Car", CarSchema, "godleycars");

module.exports = Car;
