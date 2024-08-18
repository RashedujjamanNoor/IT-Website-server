require("dotenv").config();
const express = require("express");

const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router.js");
const dbConnection = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use(errorMiddleware);
const PORT = 5000;

dbConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
