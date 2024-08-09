const express = require("express");
const { createUser } = require("../controllers/authController");

const router = express.Router();

// Routes
router.route("/").all((req, res) => {
  res.json({
    message:
      "This is the /auth route. You can also visit /auth/login and /auth/register .",
  });
});

router.route("/login").all((req, res) => {
  res.json({
    message: "This is the /login route. You can also visit /register.",
  });
});

router.route("/register").post(createUser);

module.exports = router;
