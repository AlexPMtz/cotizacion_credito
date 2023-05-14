const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Deadline = new Schema({

  weeks: {
    type: Number
  },
  normalPass: {
    type: Number
  },
  punctualPass: {
    type: Number
  }

})

module.exports = mongoose.model("Deadline", Deadline);