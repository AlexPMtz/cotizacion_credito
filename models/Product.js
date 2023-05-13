const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({

  SKU: {
    type: String
  },
  name: {
    type: String
  },
  price: {
    type: Number
  }

})

module.exports = mongoose.model("Product", Product);