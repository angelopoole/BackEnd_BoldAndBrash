const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const uri = process.env.ATLAS_URI;

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false })) // FROM UPLOAD IMAGE GUIDE
app.use(bodyParser.json()) // FROM UPLOAD IMAGE GUIDE
// Set EJS as templating engine  
app.set("view engine", "ejs"); 

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
