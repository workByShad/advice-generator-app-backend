const express = require("express");
const {
  getAllAdvice,
  postAdvice,
  getAdvice,
  deleteAdvice,
  updateAdvice,
  fallback,
} = require("../controllers/adviceController");

const router = express.Router();

// Routes
router.route("/").get(getAllAdvice).post(postAdvice);
router.route("/").all(fallback);

router.route("/:id").get(getAdvice).delete(deleteAdvice).patch(updateAdvice);
router.route("/:id").all(fallback);

module.exports = router;
