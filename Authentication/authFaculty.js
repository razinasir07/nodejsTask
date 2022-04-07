const router = require("express").Router();
const FacultyAuth = require("../model/FacultyAuth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.post('/register', async (req,res)=>{

  const emailExixtes= await FacultyAuth.findOne({email:req.body.email});

  if(emailExixtes) return res.send("Email Already Exists");

  const salt=  await bcrypt.genSalt(10);

  const hashPass = await bcrypt.hash(req.body.password, salt);
try{
  const facultyAuth= await FacultyAuth.create({
    email:req.body.email,
    password:hashPass
  });

  res.send(facultyAuth);
}catch(err){
  res.send(err);
}
});

router.post('/login', async (req, res)=>{
  const faculty= await FacultyAuth.findOne({email:req.body.email});

  if(!faculty) return res.send("Invalid Email");

  const facPass= await bcrypt.compare(req.body.password, faculty.password);

  if(!facPass) return res.send("Invalid Password");

  const tokenFac = jwt.sign({ _id: faculty._id }, "facultyyyyyyy");

  res.header("authFaculty-token", tokenFac).send(tokenFac);
})

module.exports=router;
