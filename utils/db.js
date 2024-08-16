const mongoose = require("mongoose");
const URL = "mongodb://127.0.0.1:27017/courseApp";

const dbConnection = async () => {
  try {
    mongoose.connect(URL);
    console.log("db connection successful");
  } catch (error) {
    console.error("database connection failed");
    process.exit(0);
  }
};

module.exports = dbConnection;
