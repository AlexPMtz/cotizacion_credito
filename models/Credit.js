const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

module.exports = mongoose.model("Credit", Credit);