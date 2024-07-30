const { setData } = require("../utils/firestoreUtils");

// POST Route

const postAdvice = async (req, res) => {
  const db = req.db;

  const docRef = db.collection("advice").doc("1");

  try {
    await setData(docRef, "advice id", "advice text");
    res.json({ message: "Created an advice" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating advice", error: error.message });
  }
};

// GET Routes

const getAllAdvice = (req, res) => {
  res.send("Get all advice");
};

const getAdvice = (req, res) => {
  res.send("Get an advice");
};

// PATCH Route

// DELETE Route

const deleteAdvice = (req, res) => {
  res.send("Delete an advice");
};

// Exports
module.exports = { getAllAdvice, postAdvice, getAdvice, deleteAdvice };
