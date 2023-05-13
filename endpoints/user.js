const express = require("express");
const app = express.Router();

const userController = require("../controllers/user");

app.get("/", userController.getUsers);

app.post("/", userController.createUser);

module.exports = app;