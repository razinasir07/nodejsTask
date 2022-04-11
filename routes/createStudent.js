const router = require("express").Router();
const verify= require("../VerificationJwt/verfyjwttoken")
const AuthFacultyAdmin= require('../VerificationJwt/verifytokenfaculty')
const AuthStudentFacAdmin = require("../VerificationJwt/verifystudent");
const studentController= require('../Controllers/StudentController');

const {body}= require('express-validator')




router.post(
  "/createStudent",
  verify,
  [
    body("name").not().isEmpty().trim().escape(),
    body("address").not().isEmpty().trim().escape(),
    body("email").isEmail().normalizeEmail()
  ],
  studentController.createStudent
);

router.get('/', AuthFacultyAdmin, studentController.getStudents);

router.get('/:id', AuthStudentFacAdmin, studentController.getStudentById)

router.delete("/:id", verify, studentController.removeStudent);

router.put("/:id", verify, studentController.updateStudent );


module.exports= router;