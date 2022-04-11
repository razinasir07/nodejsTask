const mongoose = require("mongoose");

const FacultySChema = new mongoose.Schema({

  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'

  },
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
    unique:true
  },
  room: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("faculty", FacultySChema);
