const express = require("express");
const {
  getAllAdvice,
  postAdvice,
  getAdvice,
  deleteAdvice,
} = require("../controllers/adviceController");

const router = express.Router();

// Routes
router.route("/").get(getAllAdvice).post(postAdvice);

router.route("/:id").get(getAdvice).delete(deleteAdvice);

module.exports = router;
