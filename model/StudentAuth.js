const mongoose = require("mongoose");
const validator = require("validator");

const StudentAuthSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique:true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email Invalid");
      }
    },
  },
  password: {
    type: String,
    require: true,
    unique:true
  },
});

module.exports = mongoose.model("studentAuth", StudentAuthSchema);
