const router = require("express").Router();
const Exam = require("../model/Examination");
const verify = require("../VerificationJwt/verfyjwttoken");
const AuthFacultyAdmin = require("../VerificationJwt/verifytokenfaculty");


router.post('/createExam', verify, async (req,res)=>{

  try {
    
    const exam= await Exam.create({
      exam_type:req.body.exam_type,
      exam_name:req.body.exam_name,
      exam_description:req.body.exam_description,
      exam_date:req.body.exam_date,
      exam_studentId:req.body.exam_studentId
      
    });
    res.status(200).send(exam);

  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/',verify, async (req,res)=>{

  try {
    const getAllExams= await Exam.find();

    res.status(200).send(getAllExams);
  } catch (error) {
    res.status(400).send(error);
  }

});

router.get('/:id', verify , async (req, res)=>{

  try{
  const getExamsbyId= await Exam.findById(req.params.id);

  res.status(200).send(getExamsbyId);
  } catch(err){
    res.status(400).send(err);
  }
});

router.delete('/:id', verify, async (req, res)=>{
try{
  await Exam.deleteOne({_id:req.params.id});
  res.status(200).send("Exam Deleted");
}
catch(err){
  res.status(400).send(err);
}

});
router.put("/:id", verify, async (req, res) => {
  try {
    await Exam.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          exam_type: req.body.exam_type,
          exam_name: req.body.exam_name,
          exam_description: req.body.exam_description,
          exam_date: req.body.exam_date,
          exam_studentId: req.body.exam_studentId,
        },
      }
    );

    res.send("Exam Updated");
  } catch (err) {
    res.send(err);
  }
});

module.exports= router;