const express = require("express")
const app = express.Router()

const productController = require("../controllers/product");

app.get("/",productController.getProducts);

app.post("/",productController.createProduct);

app.patch("/:idProduct",productController.patchProduct);

app.delete("/",productController.deleteProduct);

module.exports = app;