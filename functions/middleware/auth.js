const { getAuth } = require("firebase-admin/auth");

const authenticate = /*async*/ (req, res, next) => {
  //   const authorizationHeader = req.headers.authorization;
  //     const authorizationHeader = req.headers;

  //   console.log(authorizationHeader);

  //   if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
  //     return res.status(401).send("Unauthorized");
  //   }
  const uid = req.headers.uid;

  getAuth()
    .getUser(uid)
    .then((userRecord) => {
      console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
    })
    .catch((error) => {
      console.log("Error fetching user data:", error);
    });

  // const idToken = authorizationHeader.split('Bearer ')[1];

  // try {
  //   const decodedToken = await admin.auth().verifyIdToken(idToken);
  //   req.user = decodedToken;
  //   next();
  // } catch (error) {
  //   console.error('Error verifying token:', error);
  //   res.status(401).send('Unauthorized');
  // }
  next();
};

module.exports = authenticate;
