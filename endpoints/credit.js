const express = require("express");
const app = express.Router();

const creditController = require("../controllers/credit");

app.get("/", creditController.getQuote);

app.post("/",creditController.createQuote);

module.exports = app