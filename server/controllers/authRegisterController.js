const User = require("../models/userModelRegister")
const  register= async (req, res) => {
    const user={
      name:req.body.name,
      email:req.body.email,
      password:req.body.password
    }
    console.table({user}) 
    if(!user.name) {  
      return res.status(400).json({error: "Name is required"})  
    }
    if(!user.email) {  
      return res.status(400).json({error: "Email is required"})
    }
    if(!user.password|| user.password.length < 6) {
      return res.status(400).json({error: "Password is required and must be at least 6 characters long"})
    }
    let userExists = await User.findOne({email: user.email}).exec()
    if(userExists) {
      return res.status(400).json({error: "Email already Exists"})
    }
    
    const newUser = new User(user)
    try{
      await newUser.save()
      console.log("User created successfully")
      return res.json({register: true})
    }catch(err){
      console.log("Error in creating user", err)
      return res.status(400).json({error: "Error in creating user"})
    }

  }
        
  module.exports =register