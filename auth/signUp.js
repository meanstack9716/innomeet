const { auth, firestore } = require("firebase-admin");
const { initFirebase } = require("../firebase");

const createUser = async (req, res) => {
  const { email, password, firstName,lastName,mobileNo} = req.body;

  try {
    // Create Firebase auth user
    const newUser = await auth().createUser({
      email: email,
      password: password,
    });

    await firestore().collection("users").doc(newUser.uid).set({
     firstName,
     lastName,
     mobileNo,
     email
   });

    res.status(200).send({ message: "Success fully add" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = {
  createUser
};
