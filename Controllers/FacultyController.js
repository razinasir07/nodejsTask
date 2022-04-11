const Faculty = require("../model/Faculty");

const createFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.create({
      name: req.body.name,
      description: req.body.description,
      facultyType: req.body.facultyType,
      teacherId: req.body.teacherId,
      room: req.body.room,
    });
    res.status(200).send(faculty);
  } catch (err) {
    res.status(400).send(err);
  }
  
};

const getFaculty = async (req, res) => {
  try {
    const getAllFaculty = await Faculty.find();

    res.status(200).send(getAllFaculty);
  } catch (err) {
    res.status(400).send(err);
  }
};

const getFacultyById = async (req, res) => {
  try {
    const getAllFacultybyId = await Faculty.findById(req.params.id);
    res.status(200).send(getAllFacultybyId);
  } catch (error) {
    res.status(400).send(error);
  }
};

const removeFaculty = async (req, res) => {
  try {
    await Faculty.deleteOne({ _id: req.params.id });
    res.status(200).send("Factulty Deleted");
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateFaculty = async (req, res) => {
   try {
     await Faculty.findOneAndUpdate(
       { _id: req.params.id },
       {
         $set: {
           name: req.body.name,
           description: req.body.description,
           facultyType: req.body.facultyType,
           teacherId: req.body.teacherId,
           room: req.body.room,
         },
       }
     );

     res.send("Faculty Updated");
   } catch (err) {
     res.send(err);
   }
};

module.exports={
  createFaculty,
  getFaculty,
  getFacultyById,
  removeFaculty,
  updateFaculty
}