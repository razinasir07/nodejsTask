const mongoose = require("mongoose");
const validator= require('validator')


const StudentSChema = new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'

  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique:true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Email Invalid");
      }
    }
  },
  password: {
    type: String,
    require: true,
    unique:true,
    
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
