const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("auth-token");
  const tokenFac = req.header("authFaculty-token");
  const tokenStu = req.header("authStudent-token");

  // if(!token) return res.status(400).send("Access Denied")

  if (!token && !tokenFac && !tokenStu) return res.status(400).send("Access denied");

  if (token) {
    try {
      const verified = jwt.verify(token, "hdahioahsoihassodha");
      req.admin = verified;

      // const verifiedFac = jwt.verify(tokenFac, "facultyyyyyyy");
      // req.faculty=verifiedFac;

      next();
    } catch (error) {
      res.status(400).send("Invalid Token");
    }
  } else if (tokenFac) {
    try {
      const verified = jwt.verify(tokenFac, "facultyyyyyyy");
      req.faculty = verified;

      // const verifiedFac = jwt.verify(tokenFac, "facultyyyyyyy");
      // req.faculty=verifiedFac;

      next();
    } catch (error) {
      res.status(400).send("Invalid Token");
    }
  } 
  else if (tokenStu) {
    try {
      const verified = jwt.verify(tokenStu, "studenttttttttttttt");
      req.student = verified;

      // const verifiedFac = jwt.verify(tokenFac, "facultyyyyyyy");
      // req.faculty=verifiedFac;

      next();
    } catch (error) {
      res.status(400).send("Invalid Token");
    }
  }
};
