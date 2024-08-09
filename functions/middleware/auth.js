const { getAuth } = require("firebase-admin/auth");

const authenticate = async (req, res, next) => {
  const uid = req.headers.uid;

  if (!uid) {
    return res.status(400).json({ message: "Missing UID" });
  }

  try {
    const userRecord = await getAuth().getUser(uid);

    console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);

    next();
  } catch (error) {
    console.log("Error fetching user data:", error.message);

    res.json({ message: "Unauthorised" });
  }
};

module.exports = authenticate;
