const mongoose = require("mongoose");
// require("dotenv").config(); // <-- this loads .env
require("dotenv").config({ path: "./test.env" }); // explicitly load test.env

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const main = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, options);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
  }
};

module.exports = main;
