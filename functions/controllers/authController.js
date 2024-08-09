const { getAuth } = require("firebase-admin/auth");

// POST Route

const createUser = async (req, res) => {
  //   const userData = {
  //     email: "user@example.com",
  //     emailVerified: false,
  //     password: "secretPassword",
  //     displayName: "John Doe",
  //     disabled: false,
  //   };

  const userData = {
    email: req.body.email,
    password: req.body.password,
    displayName: req.body.displayName,
  };

  try {
    const userRecord = await getAuth().createUser(userData);

    console.log("Successfully created new user:", userRecord);

    res.json({
      message: "Successfully created new user:",
      data: userRecord,
    });
  } catch (error) {
    console.log("Error creating new user:", error.message);

    res.json({ message: "Error creating new user:", error: error.message });
  }
};

// Exports
module.exports = { createUser };
