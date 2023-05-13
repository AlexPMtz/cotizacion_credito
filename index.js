const mongoose = require('mongoose');
require('dotenv').config();
const app = require("./app");

const dbConnection = async() => {
  try {
    await mongoose.connect(process.env.DB_CNN, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log("DB online");
    app.listen(process.env.PORT, () => {
      console.log(`Servidor en puerto ${process.env.PORT}`);
    })
  } catch (error) {
    console.log("ERROR: " + error);
  }
}

dbConnection();