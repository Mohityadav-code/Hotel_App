const express = require("express");
const register = require("../controllers/authRegisterController");
const router = express.Router();

router.post("/register", register);

// Now we will import all controlles at once

const fs = require("fs");
const files = fs.readdirSync("./controllers");
console.log("files: ", files);
files.map((files) => {
  const temp = require("../controllers/" + files);
  const extractedName = files.replace(/(auth|Controller\.js)/g, "");
  console.log("extractedName: ", extractedName);
  router.post(`/${extractedName}`, temp);
});

module.exports = router;
