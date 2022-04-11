const mongoose= require('mongoose');
const validator = require("validator");

const AdminSchema= new mongoose.Schema({

  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'

  },

  name:{
    type:String,
    require:true,
  },
  email:{
    type:String,
    require:true,
    unique:true,
     validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email Invalid");
      }
    }
  },
  password:{
    type:String,
    require:true,
    unique:true
  }

});

module.exports= mongoose.model('admin', AdminSchema);