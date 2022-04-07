const mongoose = require("mongoose");

const PaperSchema = new mongoose.Schema({
  paper_Type: {
    type: String,
    require: true,
  },
  paper_name: {
    type: String,
    require: true,
  },
  paper_description: {
    type: String,
    require: true,
  },
  paper_subject: {
    type: String,
    require: true,
  },
  paper_time:{
    type:String,
    require:true
  }
});

module.exports = mongoose.model("paper", PaperSchema);
