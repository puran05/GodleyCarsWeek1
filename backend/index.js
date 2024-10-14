require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const carRoute = require("./routes/car.route.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/car", carRoute);

app.get("/", (req, res) => {
  res.send("This is the front of the db  ");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to the database");

    app.listen(3001, () => {
      console.log(`server is running on port 3001`);
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
