const firebaseAdmin = require("firebase-admin");

const login = async (req, res) => {
     try {
       const { email, password } = req.body;
       const user = await firebaseAdmin.auth().signInWithEmailAndPassword(email, password);
       res.status(200).send({ message: "Login successful" });
     } catch (error) {
       console.error(error);
       res.status(400).send({ message: "Login failed" });
     }
   };


module.exports = { login };
