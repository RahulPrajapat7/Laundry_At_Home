const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser=require ('../middleware/fetchuser');

var JWT_SECRET='Harryisagoodb$oy'

//Route1: create a user using :post "/api/auth/createuser",no login required
router.post(
  "/createuser",
  [
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("email", "enter a valid email").isEmail(),
    body("password", "password must  be atleast 5 letter").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success=false;
    // if there are are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check wheather the email user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        success=false;
        return res.status(400).json({ error: "Sorry a user with this email already exists" });
      }
      //create a bcrypt password generator for security
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password,salt);
      //create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
          user:{
              id:user.id,
          }
      }
      //creating a json web toke
      const authToken = jwt.sign(data,JWT_SECRET);
      
      //   .then(user => res.json(user))
      //   .catch(err=>{console.log(err)
      //      res.json({error: 'please enter a unique value for email'})})
      success=true;
      res.json({success,authToken})
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error");
    }
  }
);
// Route2:Authentication a user using :post "/api/auth/login".no login required
router.post(
  "/login",
  [
   
    body("email", "enter a valid email").isEmail(),
    body("password", "password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success=false;
// if there are are errors, return bad request and the errors
const errors = validationResult(req);
if (!errors.isEmpty()) {
  success=false;
  return res.status(400).json({ errors: errors.array() });
}
const {email,password}=req.body;
try{
let user =await User.findOne({email});
if(!user){
  return res.status(400).json({error:"please try to login with correct credential"});
}
  const passwordCompare = await bcrypt.compare(password,user.password);
  if(!passwordCompare){
    return res.status(400).json({error:"please try to login with correct credential"});
  }
  const data = {
    user:{
        id:user.id,
    }
}
//creating a json web toke
const authToken = jwt.sign(data,JWT_SECRET);
success=true;
res.json({success,authToken})

}catch(error){
  console.error(error.message);
  res.status(500).send("internal server error");
}

  });
  // Route 3: set loggedin user details using: Post "/api/auth/getuser". login required
  router.post(
    "/getuser",fetchuser,async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
   
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
  }
})
module.exports = router
