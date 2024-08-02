const express = require("express");

const router = express.Router();

// Routes
router.route("/login").all((req, res) => {
  res.json({
    message: "This is the /login route. You can also visit /register.",
  });
});

router.route("/register").all((req, res) => {
  res.json({
    message: "This is the /register route. You can also visit /login.",
  });
});

module.exports = router;
