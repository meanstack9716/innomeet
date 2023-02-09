var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccount.json");

let initializeApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = {initializeApp}