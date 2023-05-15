'use strict'

const Credit = require("../models/Credit");

const createQuote = async(req,res) => {

  const {
    normalRate,
    punctualRate,
    productId,
    price,
    weeks
  } = req.body

  let newQuote = new Credit();
  newQuote.normalPass = (((price*normalRate)+price)/weeks).toFixed(2);
  newQuote.punctualPass = (((price*punctualRate)+price)/weeks).toFixed(2);
  newQuote.weeks = weeks;
  newQuote.productId = productId;

  try {
    let quoteSved = await newQuote.save();
    res.status(201).send({ creditQuote: quoteSved });
  } catch (error) {
    res.status(500).send({error: error.message});
  }
}

const getQuote = async(req,res) => {
  try {
    let creditQuoteList = await Credit.find()
                          .populate("productId");
    res.status(200).send({ creditQuoteList });
  } catch (error) {
    res.status(500).send({error: error.message});
  }
}

module.exports = {
  createQuote,
  getQuote
}