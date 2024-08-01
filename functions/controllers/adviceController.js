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
    console.error("Error creating document:", error);
    res.status(500).json({ message: "Internal Server Error" });
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
};

const getAdvice = async (req, res) => {
  const db = req.db;
  const adviceRef = db.collection("advice").doc(req.params.id);

  try {
    const doc = await adviceRef.get();

    if (!doc.exists) {
      return res.status(404).json({ message: "No such document!" });
    }

    const advice = {
      id: doc.id,
      data: doc.data(),
    };

    res.status(200).json({ advice });
  } catch (error) {
    console.error("Error fetching document:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// PATCH Route

const updateAdvice = async (req, res) => {
  const db = req.db;
  const adviceRef = db.collection("advice").doc(req.params.id);

  try {
    const doc = await adviceRef.get();

    if (!doc.exists) {
      return res.status(404).json({ message: "No such document!" });
    }

    const response = await adviceRef.update({
      adviceText: req.body.adviceText,
    });

    res
      .status(200)
      .json({ message: "Successfully updated document", response });
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// DELETE Route

const deleteAdvice = async (req, res) => {
  const db = req.db;
  const adviceRef = db.collection("advice").doc(req.params.id);

  try {
    const doc = await adviceRef.get();

    if (!doc.exists) {
      return res
        .status(404)
        .json({ message: "No advice with the provided ID exists." });
    }

    const response = await adviceRef.delete();

    res.status(200).json({
      message: `Deleted an advice with ID: ${req.params.id}`,
    });
  } catch (error) {
    console.error("Error deleting document:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Fallback
const fallback = (req, res) => {
  res.json({
    message: "route not set up.",
  });
};

// Exports
module.exports = {
  getAllAdvice,
  getAdvice,
  postAdvice,
  deleteAdvice,
  updateAdvice,
  fallback,
};
