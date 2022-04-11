const router = require("express").Router();
const StudentAuth = require("../model/StudentAuth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const express = require("express");

const app = express();

app.use(cookieParser());
require("dotenv").config();


router.post('/register', async(req, res)=>{

  const emailExists= await StudentAuth.findOne({email:req.body.email});

  if(emailExists) return res.status(400).send("Email Already Exists");

  const salt = await  bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(req.body.password,salt);

  try {

    const studentAuth= await StudentAuth.create({
      email:req.body.email,
      password:hashPass
    });
    res.status(200).send(studentAuth);
    
  } catch (error) {
    res.status(400).send(error)
  }
});

router.post('/login', async (req,res)=>{
  const student = await StudentAuth.findOne({email:req.body.email});

  if(!student) return res.status(400).send("Invalid Email");
  
  const stuPass= await bcrypt.compare(req.body.password, student.password);

  if(!stuPass) return res.status(400).send("Invalid Password");

  const tokenstu = jwt.sign({ _id: student._id }, process.env.TOKEN_STUDDENT);


   res.cookie("authStudent-token", tokenstu, {
     httpOnly: true,
     expires: new Date(Date.now() + 25892000000),
     secure:true
   });


   res.header("authStudent-token", tokenstu).send(tokenstu);
})

module.exports= router;