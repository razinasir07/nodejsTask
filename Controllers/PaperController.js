const Paper = require("../model/Paper");


const createPaper = async (req, res) => {
 try {
   const paper = await Paper.create({
     paper_Type: req.body.paper_Type,
     paper_name: req.body.paper_name,
     paper_description: req.body.paper_description,
     paper_subject: req.body.paper_subject,
     paper_time: req.body.paper_time,
   });
   res.status(200).send(paper);
 } catch (error) {
   res.status(400).send(error);
 }
};

const getPapers = async (req, res) => {
  try {
    const getAllPaper = await Paper.find();

    res.status(200).send(getAllPaper);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getPaperByID = async (req, res) => {
  try {
    const getPaperbyId = await Paper.findById(req.params.id);

    res.status(200).send(getPaperbyId);
  } catch (err) {
    res.status(400).send(err);
  }
};

const removePaper = async (req, res) => {
 try {
   await Paper.deleteOne({ _id: req.params.id });
   res.status(200).send("Paper Deleted");
 } catch (err) {
   res.status(400).send(err);
 }
};

const updatePaper = async (req, res) => {
 try {
   await Marks.findOneAndUpdate(
     { _id: req.params.id },
     {
       $set: {
         paper_Type: req.body.paper_Type,
         paper_name: req.body.paper_name,
         paper_description: req.body.paper_description,
         paper_subject: req.body.paper_subject,
         paper_time: req.body.paper_time,
       },
     }
   );

   res.send("Paper Updated");
 } catch (err) {
   res.send(err);
 }
};

module.exports = {
  createPaper,
  getPapers,
  getPaperByID,
  removePaper,
  updatePaper,
};