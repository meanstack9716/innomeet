const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const firebase = require("firebase-admin");

const { initFirebase } = require("./firebase");

const {createUser} = require("./auth/signUp");
const {resetPassword} = require("./auth/resetPassword")
const {login} = require("./auth/login")

const {emailValidator,validationMiddleWare} = require("./middleware/middleware")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/user", [emailValidator(),validationMiddleWare],createUser);
app.post("/resetPassword", resetPassword)
app.get("/login",login)
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
