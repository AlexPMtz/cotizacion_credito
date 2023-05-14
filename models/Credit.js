const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Credit = new Schema({

  normalPass: {
    type: Number
  },
  punctualPass: {
    type: Number
  },
  idProduct: {
    type: Schema.Types.ObjectId,
    ref: "product"
  }

})

module.exports = mongoose.model("Credit", Credit);