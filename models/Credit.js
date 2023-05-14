const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniquieValidator = require("mongoose-unique-validator")

const Credit = new Schema({

  normalPass: {
    type: Number
  },
  punctualPass: {
    type: Number
  },
  weeks: {
    type: Number
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product"
  }

})

Credit.plugin(uniquieValidator, { message: 'must be unique'});
module.exports = mongoose.model("Credit", Credit);