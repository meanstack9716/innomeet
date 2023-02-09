const { auth, firestore } = require("firebase-admin");
const { initFirebase } = require("../firebase");

const resetPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Get the user corresponding to the specified email address
    const user = await firestore().collection("users").where("email", "==", email).get();
     console.log(user);
    // Check if a user with the specified email was found
    if (user.empty) {
      res.status(404).send({ message: "No user found with the specified email address."});
    }

    // Send password reset email to the specified email address
    const sendPasswordResetEmailResult = await auth().generatePasswordResetLink(email);

    res.status(200).send({ message: "Password reset email sent successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error." });
  }
};

module.exports = {
  resetPassword
};
