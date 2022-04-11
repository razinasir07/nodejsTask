
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Faculty= require('../model/Faculty')

module.exports = async function (req, res, next) {
  const token = req.header("auth-token");
  const tokenFac = req.header("authFaculty-token");

  // if(!token) return res.status(400).send("Access Denied")

  if (!token && !tokenFac) return res.status(400).send("Access denied");

  if (token) {
    try {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET1);
      req.admin = verified;

      // const verifiedFac = jwt.verify(tokenFac, "facultyyyyyyy");
      // req.faculty=verifiedFac;
      

      next();
    } catch (error) {
      res.status(400).send("Invalid Token");
    }
  } else if (tokenFac) {
    try {
      const verified = jwt.verify(tokenFac, process.env.TOKEN_FACULTY);
      req.faculty = verified;

    //   const currentUser= await Faculty.findById(verified.id);
    // if(!currentUser) return  res.send("The user of this token does not exixts");
    
      // const verifiedFac = jwt.verify(tokenFac, "facultyyyyyyy");
      // req.faculty=verifiedFac;

      next();
    } catch (error) {
      res.status(400).send("Invalid Token");
    }
  }
};
