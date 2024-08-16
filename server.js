const express = require("express");

const app = express();
const router = require("./router/auth-router");
const dbConnection = require("./utils/db.js");

app.use(express.json());
app.use("/api/auth", router);
const PORT = 5000;

dbConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
