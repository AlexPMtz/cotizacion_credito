const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Credit = new Schema({

  quote: {
    type: Number
  },
  idProduct: {
    type: Schema.Types.ObjectId,
    ref: "product"
  }

})

module.exports = mongoose.model("Credit", Credit);