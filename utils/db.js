const mongoose = require("mongoose");
const URL = process.env.MONGOURL;

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
