const router = require("express").Router();
const verify= require("../VerificationJwt/verfyjwttoken")
const Student= require('../model/Student');
const AuthFacultyAdmin= require('../VerificationJwt/verifytokenfaculty')
const AuthStudentFacAdmin = require("../VerificationJwt/verifystudent");

router.post('/createStudent', verify, async (req, res)=>{

  try{
  const student = await Student.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    collegeId:req.body.collegeId
  });
  res.send(student)
} catch(err){
res.send(err)
}
});

router.get('/', AuthFacultyAdmin, async (req,res)=>{
try{
  const getAllStudents= await Student.find();

  res.status(200).send(getAllStudents);
}
catch(err){
  res.status(400).send(err)
}
})

router.get('/:id', AuthStudentFacAdmin, async (req, res)=>{

  try {
    const getStudentById= await Student.findById(req.params.id);
    res.status(200).send(getStudentById);
  } catch (error) {
    res.status(400).send(error);
  }
})
router.delete("/:id", verify, async (req, res) => {
  try {
     await Student.deleteOne({_id: req.params.id});
    res.status(200).send("Student Deleted");
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
     await Student.findOneAndUpdate({_id:req.params.id}, {
       $set: {
         name: req.body.name,
         email: req.body.email,
         password: req.body.password,
         address: req.body.address,
         collegeId: req.body.collegeId,
       },
     });
  
    res.send('Student Updated');
  } catch (err) {
    res.send(err);
  }
});


module.exports= router;