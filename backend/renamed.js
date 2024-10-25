//use this file to add the cars to the inventory. Once the cars are updated then do node filename
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Car = require("./models/car.model"); // Make sure this points to the correct Car model

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    addCars();
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Create a function to add cars
const addCars = async () => {
  const cars = [
    {
      make: "Toyota",
      model: "Corolla",
      year: 2022,
      price: 20000,
      mileage: 1000,
      color: "White",
    },
    {
      make: "Honda",
      model: "Civic",
      year: 2021,
      price: 22000,
      mileage: 5000,
      color: "Black",
    },
    {
      make: "Ford",
      model: "Mustang",
      year: 2020,
      price: 30000,
      mileage: 15000,
      color: "Red",
    },
    // Add more car objects here until you reach 20 cars
    {
      make: "Chevrolet",
      model: "Impala",
      year: 2019,
      price: 18000,
      mileage: 20000,
      color: "Blue",
    },
    {
      make: "Nissan",
      model: "Altima",
      year: 2020,
      price: 24000,
      mileage: 12000,
      color: "Silver",
    },
    // Repeat until you have 20 cars...
  ];

  try {
    // Insert all cars into the database
    await Car.insertMany(cars);
    console.log("Successfully added 20 cars!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error adding cars: ", error);
  }
};
