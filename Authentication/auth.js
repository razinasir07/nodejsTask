const router= require ('express').Router();
const Admin= require('../model/Admin');
const bcrypt= require('bcryptjs')
const jwt= require('jsonwebtoken')

router.post('/register', async (req,res)=>{
  console.log(req.body)

  const emailExists= await Admin.findOne({email:req.body.email});
  
  if(emailExists){
    res.send('Email Already exists');
  }
  else{
    const salt = await bcrypt.genSalt(10);
    const hashpass= await bcrypt.hash(req.body.password, salt)
  try {
    const admin = await Admin.create({
      name: req.body.name,
      email: req.body.email,
      password: hashpass,
    });
    res.send(admin);
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}
 
});

router.post('/login',async (req, res)=>{

 const admin= await Admin.findOne({email:req.body.email});
  
  if(!admin) return res.send('invalid email');

  const validpass= await bcrypt.compare(req.body.password, admin.password);

  if( !validpass) return res.status(400).send('Invalid password');

  const token = jwt.sign({ _id: admin._id }, "hdahioahsoihassodha");

  res.header('auth-token',token).send(token)

  

})

module.exports= router;