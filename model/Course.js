const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  course_Type: {
    type: String,
    require: true,
  },
  course_name: {
    type: String,
    require: true,
  },
  course_description: {
    type: String,
    require: true,
  },
  course_date: {
    type: Date,
    require: true,
  },
});

module.exports = mongoose.model("course", CourseSchema);
