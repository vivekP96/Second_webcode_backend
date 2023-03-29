const mongoose = require("mongoose");
const uri = process.env.URI;
module.exports = () => {
  try {
    mongoose.connect(uri, {});
    console.log("Connected to Database Sucessfully!!!");
  } catch (error) {
    console.log(error);
    console.log("Connection Failed");
  }
};
