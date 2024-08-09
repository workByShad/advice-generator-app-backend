const express = require("express");

const router = express.Router();

// Routes
router.route("/").all((req, res) => {
  res.json({ message: "This is the root. Please visit /advice or /auth." });
});

module.exports = router;
