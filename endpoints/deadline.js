const express = require("express")
const app = express.Router()

const deadlineController = require("../controllers/deadline");

app.get("/", deadlineController.getDeadlines);

app.post("/", deadlineController.createDeadline);

module.exports = app;