const bodyParser = require('body-parser')
const express = require('express');
const app = express();

const productRoutes = require("./endpoints/product");
const userRoutes = require("./endpoints/user");
const deadlineRoutes = require("./endpoints/deadline");
const creditRoutes = require("./endpoints/credit")

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use((req,res,next)=>{
  res.set('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','X-API-KEY,Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization');
  res.header('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE');
  res.header('Allow','GET, POST, PUT, PATCH, DELETE')
  next();
});

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/deadlines", deadlineRoutes);
app.use("/creditQuotes", creditRoutes);

module.exports = app;