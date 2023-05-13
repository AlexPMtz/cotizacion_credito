const bodyParser = require('body-parser')
const express = require('express');
const app = express();

const productRoutes = require("./endpoints/product");
const userRoutes = require("./endpoints/user");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','X-API-KEY,Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization');
  res.header('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE');
  res.header('Allow','GET, POST, PUT, PATCH, DELETE')
  next();
});

app.use("/products", productRoutes);
app.use("/users", userRoutes);

module.exports = app;