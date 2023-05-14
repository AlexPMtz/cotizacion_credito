const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

module.exports = mongoose.model("Deadline", Deadline);