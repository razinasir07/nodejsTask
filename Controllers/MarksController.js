const Marks = require("../model/Marks");

const createMarks = async (req, res) => {
  try {
    const marks = await Marks.create({
      marks_type: req.body.marks_type,
      marks_result: req.body.marks_result,
      marks_description: req.body.marks_description,
      marks_number: req.body.marks_number,
    });
    res.status(200).send(marks);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getMarks = async (req, res) => {
 try {
   const getAllMarks = await Marks.find();

   res.status(200).send(getAllMarks);
 } catch (error) {
   res.status(400).send(error);
 }
};

const getMarkssbyID = async (req, res) => {
   try {
     const getMarksbyID = await Marks.findById(req.params.id);

     res.status(200).send(getMarksbyID);
   } catch (err) {
     res.status(400).send(err);
   }
};

const removeMarks = async (req, res) => {
  try {
    await Marks.deleteOne({ _id: req.params.id });
    res.status(200).send("Marks Deleted");
  } catch (err) {
    res.status(400).send(err);
  }
};

const updateMarks = async (req, res) => {
  try {
    await Marks.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          marks_type: req.body.marks_type,
          marks_result: req.body.marks_result,
          marks_description: req.body.marks_description,
          marks_number: req.body.marks_number,
        },
      }
    );

    res.send("Marks Updated");
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  createMarks,
  getMarks,
  getMarkssbyID,
  removeMarks,
  updateMarks,
};