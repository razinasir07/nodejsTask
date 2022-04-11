const router = require("express").Router();
const verify = require("../VerificationJwt/verfyjwttoken");
const AuthFacultyAdmin = require("../VerificationJwt/verifytokenfaculty");
const AuthStudentFacAdmin = require("../VerificationJwt/verifystudent");
const userController = require("../Controllers/UserController");

const { body } = require("express-validator");

router.post(
  "/createUser",
  AuthFacultyAdmin,
  [
    body("name").not().isEmpty().trim().escape(),
    body("UserAddress").not().isEmpty().trim().escape(),
    body("email").isEmail().normalizeEmail(),
  ],
  userController.createUser
);

router.get("/", AuthFacultyAdmin, userController.getUser);

router.get("/:id", AuthStudentFacAdmin, userController.getUserById);

router.delete("/:id", verify, userController.removeUser);

router.put("/:id", verify, userController.updateUser);

module.exports = router;
