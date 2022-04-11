const router = require("express").Router();
const verify = require("../VerificationJwt/verfyjwttoken");
const AuthFacultyAdmin = require("../VerificationJwt/verifytokenfaculty");
const ExamController= require('../Controllers/ExamController')
const { body } = require("express-validator");

router.post(
  "/createExam",
  verify,
  [
    body("exam_name").not().isEmpty().trim().escape(),
    body("exam_type").not().isEmpty().trim().escape(),
    body("exam_studentId").not().isEmpty().trim().escape(),
  ],
  ExamController.createExam
);

router.get('/',verify, ExamController.getExams);

router.get('/:id', verify , ExamController.getExamByID);

router.delete('/:id', verify, ExamController.removeExam);
router.put("/:id", verify, ExamController.updateExam);

module.exports= router;