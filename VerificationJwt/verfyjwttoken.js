const jwt= require('jsonwebtoken');
require("dotenv").config();
const Admin= require('../model/Admin')

module.exports = async function  (req,res, next){

  const token= req.header('auth-token');
  

  if(!token) return res.status(400).send("Access Denied")

 
  

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET1);
    req.admin=verified;
  
    const currentUser= await Admin.findById(verified.id);
    if(!currentUser) return  res.status(400).send("The Admin for this toekn is not avaibale in database");
    

    // const verifiedFac = jwt.verify(tokenFac, "facultyyyyyyy");
    // req.faculty=verifiedFac;
    
    next();
  } catch (error) {
    res.status(400).send("Invalid Token")
  }



}
  
