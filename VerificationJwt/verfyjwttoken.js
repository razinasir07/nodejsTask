const jwt= require('jsonwebtoken');

module.exports = function  (req,res, next){

  const token= req.header('auth-token');
  

  if(!token) return res.status(400).send("Access Denied")

 
  

  try {
    const verified = jwt.verify(token,  "hdahioahsoihassodha");
    req.admin=verified;
  

    // const verifiedFac = jwt.verify(tokenFac, "facultyyyyyyy");
    // req.faculty=verifiedFac;
    
    next();
  } catch (error) {
    res.status(400).send("Invalid Token")
  }



}
  
