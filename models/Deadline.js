const mongoose = requiere("mongoose");
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
  },
  deadlineId: {
    type: Schema.Types.ObjectId,
    ref: "deadline"
  }

})

module.exports = mongoose.module("Deadline", Deadline);