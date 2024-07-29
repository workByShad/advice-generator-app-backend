const express = require("express");

const router = express.Router();

// Routes
router.route("/").get((req, res) => {
  res.send("This is the /other route. You can also visit /advice.");
});

module.exports = router;
