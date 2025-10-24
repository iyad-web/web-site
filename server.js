const express = require("express");
const connectDB = require("./config/db");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

app.listen(port, () => {
  console.log("SERVER STARTED IN PORT" + port);
});
