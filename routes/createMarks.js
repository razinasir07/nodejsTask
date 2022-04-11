const router = require("express").Router();
const verify = require("../VerificationJwt/verfyjwttoken");
const AuthStudentFacAdmin= require('../VerificationJwt/verifystudent')
const AuthFacultyAdmin = require("../VerificationJwt/verifytokenfaculty");
const MarksController= require('../Controllers/MarksController')
const { body } = require("express-validator");

router.post(
  "/createMarks",
  AuthFacultyAdmin,
  [
    body("marks_result").not().isEmpty().trim().escape(),
    body("marks_number").not().isEmpty().trim().escape(),
    body("marks_description").not().isEmpty().trim().escape(),
  ],
  MarksController.createMarks
);

router.get("/", AuthFacultyAdmin, MarksController.getMarks);

router.get("/:id", AuthStudentFacAdmin, MarksController.getMarkssbyID);
router.delete("/:id", verify, MarksController.removeMarks );

router.put("/:id", verify,MarksController.updateMarks );

module.exports= router;