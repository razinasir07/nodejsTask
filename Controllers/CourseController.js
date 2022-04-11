const Course = require("../model/Course");

const createCourse = async (req, res) => {
  try {
    const course = await Course.create({
      course_type: req.body.course_type,
      course_name: req.body.course_name,
      course_description: req.body.course_description,
      course_date: req.body.course_date,
    });
    res.status(200).send(course);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getCourses = async (req, res) => {
  try {
    const getAllcourses = await Course.find();

    res.status(200).send(getAllcourses);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getCourseBYId = async (req, res) => {
  try {
    const getCoursebyId = await Course.findById(req.params.id);

    res.status(200).send(getCoursebyId);
  } catch (err) {
    res.status(400).send(err);
  }
};
const removeCourse = async (req, res) => {
   try {
     await Course.deleteOne({ _id: req.params.id });
     res.status(200).send("Course Deleted");
   } catch (err) {
     res.status(400).send(err);
   }
};
const updateCourse = async (req, res) => {
 try {
   await Course.findOneAndUpdate(
     { _id: req.params.id },
     {
       $set: {
         course_type: req.body.course_type,
         course_name: req.body.course_name,
         course_description: req.body.course_description,
         course_date: req.body.course_date,
       },
     }
   );

   res.send("Course Updated");
 } catch (err) {
   res.send(err);
 }
};


module.exports={
  createCourse,
  getCourses,
  getCourseBYId,
  removeCourse,
  updateCourse
}