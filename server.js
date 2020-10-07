const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// Imports routes

const postRoute = require('./routes/posts');

app.use('posts', postRoute);


// Gets all the frontend files from the directory 'views' and displays it
app.use(express.static('views'));

// Connection to DB

mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true , useUnifiedTopology: true}, () => 
    console.log('Connected to DB')
);

// Connects to server on port 7000
const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });
  