const router = require("express").Router();
const verify = require("../VerificationJwt/verfyjwttoken");
const AuthFacultyAdmin = require("../VerificationJwt/verifytokenfaculty");
const PaperController= require('../Controllers/PaperController')
const { body } = require("express-validator");

router.post(
  "/createPaper",
  AuthFacultyAdmin,
  [
    body("paper_subject").not().isEmpty().trim().escape(),
    body("paper_name").not().isEmpty().trim().escape(),
    body("paper_description").not().isEmpty().trim().escape(),
  ],
  PaperController.createPaper
);

router.get("/", AuthFacultyAdmin, PaperController.getPapers);

router.get("/:id", AuthFacultyAdmin, PaperController.getPaperByID);

router.delete("/:id", verify, PaperController.removePaper);

router.put("/:id", verify, PaperController.updatePaper);

module.exports= router;
