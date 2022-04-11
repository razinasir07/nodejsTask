const router = require("express").Router();
const verify = require("../VerificationJwt/verfyjwttoken");
const AuthFacultyAdmin = require("../VerificationJwt/verifytokenfaculty");
const CourseController= require('../Controllers/CourseController')
const { body } = require("express-validator");

router.post(
  "/createCourse",
  verify,
  [
    body("course_type").not().isEmpty().trim().escape(),
    body("course_name").not().isEmpty().trim().escape(),
    body("course_description").not().isEmpty().trim().escape(),
  ],
  CourseController.createCourse
);

router.get("/", AuthFacultyAdmin, CourseController.getCourses );

router.get("/:id", AuthFacultyAdmin, CourseController.getCourseBYId);

router.delete("/:id", verify, CourseController.removeCourse);

router.put("/:id", verify, CourseController.updateCourse);

module.exports= router;