const router= require('express').Router();
const verify= require('../VerificationJwt/verfyjwttoken');
const FactultyController= require('../Controllers/FacultyController')
const { body } = require("express-validator");
router.post(
  "/createFaculty",
  verify,
  [
    body("name").not().isEmpty().trim().escape(),
    body("description").not().isEmpty().trim().escape(),
    body("techerId").not().isEmpty().trim().escape(),
  ],
  FactultyController.createFaculty
);

router.get("/", verify, FactultyController.getFaculty);

router.get("/:id", verify, FactultyController.getFacultyById);

router.delete("/:id", verify, FactultyController.removeFaculty);

router.put("/:id", verify, FactultyController.updateFaculty);


module.exports = router;