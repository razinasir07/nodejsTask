const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  
  
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email Invalid");
      }
    },
  },
  password: {
    type: String,
    require: true,
    unique: true,
  },
  dob: {
    type: String,
    require: true,
  },
  userAddress: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("user", UserSchema);
