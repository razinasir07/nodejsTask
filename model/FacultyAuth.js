const mongoose = require("mongoose");

const FaccultyAuthSchema = new mongoose.Schema({

  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("facultyAuth", FaccultyAuthSchema);
