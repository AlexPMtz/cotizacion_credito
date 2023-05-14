const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniquieValidator = require("mongoose-unique-validator")

const User = new Schema({

  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  role: {
    type: String
  }
})

User.plugin(uniquieValidator, { message: 'must be unique' });
module.exports = mongoose.model("User", User);