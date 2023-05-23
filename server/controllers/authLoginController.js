const User = require("../models/userModelRegister");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const Login = async (req, res) => {
  const loginData = {
    email: req.body.email,
    password: req.body.password,
  };
  console.table({ loginData });
  if (!loginData.email) {
    return res.send({ error: "Email is required" });
  }
  if (!loginData.password) {
    return res.send({ error: "Password is required" });
  }

  const userExists = await User.findOne({ email: loginData.email }).exec();
  if (!userExists) {
    return res.send({ error: "User does not exist" });
  }
  if (userExists) {
    // compart passwords
    bcrypt.compare(
      loginData.password,
      userExists.password,
      function (err, match) {
        if (err) {
          console.log("Error in comparing password", err);
          return res.status(400).json({ error: "Error in comparing password" });
        }
        console.log("Password matched", match);
        if (match) {
          // create token
        const token=  jwt.sign({_id:User._id}, process.env.JWT_SECRET, {
            expiresIn: "7d",
          });
          return res.send({token:token   ,login:true, user:{
            name:userExists.name,
            email:userExists.email
          } } );
        } 
        else {
          return res.send({ login: false }).status(400);
        }
      }
    );
  }
};
module.exports = Login;
