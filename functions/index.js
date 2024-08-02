const { onRequest } = require("firebase-functions/v2/https");
const { logger } = require("firebase-functions");

const functions = require("firebase-functions");
const express = require("express");
const { initializeApp } = require("firebase-admin/app");
const middlewares = require("./middleware/middlewares");

const baseRoute = require("./routes/baseRoute");
const adviceRoute = require("./routes/adviceRoute");
const authRoute = require("./routes/authRoute");
const attachFirestore = require("./middleware/attachFirestore");
const fallback = require("./utils/noRouteFallback");
const authenticate = require("./middleware/auth");

// Initialize Firebase Admin
initializeApp();

// Create an Express application
const app = express();

// Apply middlewares
middlewares(app);

// Routes
app.use("/", baseRoute);
app.use("/advice", authenticate, attachFirestore, adviceRoute);
app.use("/auth", authRoute);

app.use("*", fallback);

// Export the Express app as an HTTP function
exports.api = onRequest(app);
