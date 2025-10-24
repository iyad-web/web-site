const mongoose = require("mongoose");
require("dotenv").config();

const uri =
  "mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODV_PASSWORD}@${process.env.MONGODB_CLUSTER}/?appName=Cluster0";

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("DATABASE CONNECTED");
  } catch (error) {
    console.log("DATABASE CONNECTION FAILED", error);
  }
}

module.exports = connectDB;
