'use strict'

const User = require("../models/User");

const createUser = async (req, res) => {

  const {
    firstName,
    lastName,
    email,
    password,
    role
  } = req.body

  let newUser = new User();

  newUser.firstName = firstName; 
  newUser.lastName = lastName; 
  newUser.email = email; 
  newUser.password = password; 
  newUser.role = role; 

  try {
    let userSaved = await newUser.save();
    res.status(201).send({user: userSaved});
  } catch (error) {
    res.status(500).send({error: error.message});
  }
}

const getUsers = async(req,res) => {
  try {
    let userList = User.find();
    res.status(200).send({ userList });
  } catch (error) {
    res.status(500).send({error: error.message});
  }
}

module.exports = {
  createUser,
  getUsers
}