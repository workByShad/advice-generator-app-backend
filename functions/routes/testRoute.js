const express = require("express");

const router = express.Router();

// Routes
router.route("/").post((req, res) => {
  console.log(req.body);
});

module.exports = router;
