'use strict'

const Deadline = require("../models/Deadline");

const createDeadline = async(req,res) => {
  
  const {
    weeks
  } = req.body
  
  let newDeadline = new Deadline();

  newDeadline.weeks = weeks;
  newDeadline.normalRate = (0.08638333 * weeks).toFixed(4);
  newDeadline.punctualRate = (0.07469166 * weeks).toFixed(4);

  try {
    let deadlineSaved = await newDeadline.save();
    res.status(201).send({ deadline: deadlineSaved })
  } catch (error) {
    res.status(500).send({error: error.message});
  }
}

const getDeadlines = async(req,res) => {
  try {
    let deadlineList = await Deadline.find();
    res.status(200).send({ deadlineList })
  } catch (error) {
    res.status(500).send({error: error.message});
  }
}

module.exports = {
  createDeadline,
  getDeadlines
}