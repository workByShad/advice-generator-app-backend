const express = require("express");

const router = express.Router();

// Routes
router.route("/").get((req, res) => {
  res.send("This is the root. Please visit /advice or /other.");
});

module.exports = router;
