'use strict'

const Product = require("../models/Product");

const createProduct = async(req, res) => {

  const {
    name,
    price
  } = req.body

  let newProduct = new Product();

  newProduct.SKU = "GS0" + Math.floor(Math.random() * 100);;
  newProduct.name = name;
  newProduct.price = price;
  
  try {
    let productSaved = await newProduct.save();
    res.status(201).send({ product: productSaved });
  } catch (error) {
    res.status(500).send({error: error.message});
  }
}

const getProducts = async(req,res) => {
  try {
    let productList = await Product.find();
    res.status(200).send({ productList });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

const patchProduct = async(req,res)=>{
  try {
    const {
      name,
      price
    } = req.body;
    let {idProduct} = req.params;
    let product = await Product.findByIdAndUpdate(idProduct,{$set:{name,price}},{new:true})
    res.status(200).send({product}); 
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

const deleteProduct = async(req,res) => {
  try {
    let productDeleted = Product.findOneAndDelete();
    res.sataus(200).send({productDeleted});
  } catch (error) {
    res.status(500).send({error:error.message});
  }
}

module.exports = {
  createProduct,
  getProducts,
  patchProduct,
  deleteProduct
}