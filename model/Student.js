const mongoose = require("mongoose");

const StudentSChema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  address:{
    type:String,
    require:true
  },
  collegeId:{
    type:String,
    require:true
  }
});

module.exports = mongoose.model("student", StudentSChema);
