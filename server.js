const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// ******************************   ROUTER VARIABLES & APP.USE routers

const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

app.use('/users', usersRouter); //these make it so that the root url + /user takes them to the user route
app.use('/auth', authRouter); // these will load the routers, everything in the routers
// ******************************


app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});