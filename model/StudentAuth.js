const mongoose = require("mongoose");

const StudentAuthSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("studentAuth", StudentAuthSchema);
