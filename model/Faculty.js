const mongoose = require("mongoose");

const FacultySChema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  discription: {
    type: String,
    require: true,
  },
  facultyType: {
    type: String,
    require: true,
  },
  teacherId: {
    type: String,
    require: true,
  },
  room: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("faculty", FacultySChema);
