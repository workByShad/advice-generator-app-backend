const { setData } = require("../utils/firestoreUtils");

// POST Route

const postAdvice = async (req, res) => {
  const db = req.db;
  const docRef = db.collection("advice").doc();

  const adviceText = req.body.adviceText;

  try {
    await setData(docRef, adviceText);
    res.json({ message: "Created an advice" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating advice", error: error.message });
  }
};

// GET Routes

const getAllAdvice = async (req, res) => {
  const db = req.db;
  const allAdvicesRef = db.collection("advice");

  try {
    const snapshot = await allAdvicesRef.get();

    if (snapshot.empty) {
      return res.status(404).json({ message: "No documents found." });
    }

    const documents = snapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));

    res.status(200).json({ documents });
  } catch (error) {
    console.error("Error fetching documents:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }

  // res.json({ message: "Get all advice" });
};

const getAdvice = (req, res) => {
  res.json({ message: "Get an advice" });
};

// PATCH Route

const updateAdvice = (req, res) => {
  res.json({ message: "update an advice" });
};

// DELETE Route

const deleteAdvice = (req, res) => {
  res.json({ message: "Delete an advice" });
};

// Exports
module.exports = {
  getAllAdvice,
  postAdvice,
  getAdvice,
  deleteAdvice,
  updateAdvice,
};
