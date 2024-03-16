const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Advice = require("./src/models/adviceModel");
const adviceRoutes = require("./src/routes/adviceRoutes");

const app = express();

// Middlewares

app.use(express.json());

// Routes

app.get("/", (req, res) => {
  return res.status(200).send("advice generator app.");
});

app.use("/advice", adviceRoutes);

// Database connection
const mongoDbConStr = process.env.MONGODB_URI;
const portNum = process.env.PORT;
mongoose
  .connect(mongoDbConStr)
  .then(() => {
    console.log("Connected to database.");
    app.listen(portNum, () => {
      console.log(`listening on port ${portNum}`);
    });
  })
  .catch((error) => {
    // console.log(error);
    console.log(`failed to connect to database...`);
  });
