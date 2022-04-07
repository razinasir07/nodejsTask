const mongoose = require("mongoose");

const MarksSchema = new mongoose.Schema({
  marks_type: {
    type: String,
    require: true,
  },
  marks_result: {
    type: String,
    require: true,
  },
  marks_description: {
    type: String,
    require: true,
  },
  marks_number:{
    type:String,
    required:true
  },
  
});

module.exports = mongoose.model("marks", MarksSchema);
