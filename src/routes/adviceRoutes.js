const express = require("express");
const Advice = require("../models/adviceModel");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.advice_text) {
      return res.status(400).send({ message: "Send all required fields." });
    }

    const newAdvice = {
      advice_text: req.body.advice_text,
    };

    const advice = await Advice.create(newAdvice);

    return res.status(201).send(advice);
  } catch (error) {
    console.log("/advice post route failed");
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
