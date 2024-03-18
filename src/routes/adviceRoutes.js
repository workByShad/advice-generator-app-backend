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

router.get("/", async (req, res) => {
  try {
    const advices = await Advice.find();

    return res.status(200).send({ count: advices.length, data: advices });
  } catch (error) {
    console.log("/advice get all route failed");
    return res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Advice.findById(id);

    if (result) {
      return res.status(200).send(result);
    } else {
      return res.status(404).send(`Advice ${id} not found.`);
    }
  } catch (error) {
    console.log("/advice/:id get route failed");
    return res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (!req.body.advice_text) {
      return res.status(400).send({ message: "Send all required fields." });
    }

    const updatedAdviceText = req.body.advice_text;

    const { id } = req.params;
    const result = await Advice.findByIdAndUpdate(id, {
      advice_text: updatedAdviceText,
    });

    if (result) {
      return res
        .status(200)
        .send({ message: `Advice ${id} updated successfully.` });
    } else {
      return res.status(404).send({ message: `Advice ${id} not found.` });
    }
  } catch (error) {
    console.log("/advice/:id put route failed");
    return res.status(500).send({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Advice.findByIdAndDelete(id);

    if (result) {
      return res
        .status(200)
        .send({ message: `Advice ${id} deleted successfully.` });
    } else {
      return res.status(404).send({ message: `Advice ${id} not found.` });
    }
  } catch (error) {
    console.log("/advice/:id delete route failed");
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
