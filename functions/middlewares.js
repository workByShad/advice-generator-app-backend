const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const middlewares = (app) => {
  app.use(helmet()); // Secure HTTP headers
  app.use(cors()); // Enable CORS
  app.use(express.json()); // Parse JSON requests
};

module.exports = middlewares;
