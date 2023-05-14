const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniquieValidator = require("mongoose-unique-validator")

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

Product.plugin(uniquieValidator,  { message: 'must be unique' });
module.exports = mongoose.model("Product", Product);