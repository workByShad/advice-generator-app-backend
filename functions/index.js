const { onRequest } = require("firebase-functions/v2/https");
const { logger } = require("firebase-functions");

const functions = require("firebase-functions");
const express = require("express");
const { initializeApp } = require("firebase-admin/app");
const middlewares = require("./middleware/middlewares");

const baseRoute = require("./routes/baseRoute");
const adviceRoute = require("./routes/adviceRoute");
const otherRoute = require("./routes/otherRoute");
const attachFirestore = require("./middleware/attachFirestore");

// Initialize Firebase Admin
initializeApp();

// Create an Express application
const app = express();

// Apply middlewares
middlewares(app);

// Routes
app.use("/", baseRoute);
app.use("/advice", attachFirestore, adviceRoute);
app.use("/other", otherRoute);

// Export the Express app as an HTTP function
exports.api = onRequest(app);
