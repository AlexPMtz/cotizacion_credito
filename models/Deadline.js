const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniquieValidator = require("mongoose-unique-validator")

const Deadline = new Schema({

  weeks: {
    type: Number
  },
  normalRate: {
    type: Number
  },
  punctualRate: {
    type: Number
  }

})

Deadline.plugin(uniquieValidator, { message: 'must be unique' });
module.exports = mongoose.model("Deadline", Deadline);