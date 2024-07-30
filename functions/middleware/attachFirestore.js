const { getFirestore } = require("firebase-admin/firestore");

// Middleware to attach Firestore to req
const attachFirestore = (req, res, next) => {
  const db = getFirestore();
  req.db = db;
  next();
};

module.exports = attachFirestore;
