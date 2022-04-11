const mongoose = require("mongoose");

const ExaminationSchema = new mongoose.Schema({
  examType: {
    type: String,
    require: true,
  },
  exam_name: {
    type: String,
    require: true,
  },
  exam_description: {
    type: String,
    require: true,
  },
  exam_date: {
    type: Date,
    require: true,
  },
  exam_studentId: {
    type: String,
    require: true,
    unique:true
  },
});

module.exports = mongoose.model("examination", ExaminationSchema);
