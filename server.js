const express = require("express");
const path = require("path");
//const mongoose = require("mongoose");
//const routes = require("./routes");
const axios = require("axios");
const db = require("./models");
//const socket = require("socket.io");
const app = express();
//const http = require('http').Server(app);
const PORT = process.env.PORT || 8080;

//const MONGODB_URI = process.env.MONGODB_URI || "http://localhost:8080"

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//mongoose.connect(MONGODB_URI);

// Make Public a static folder
app.use(express.static(path.join(__dirname, 'client/public')));

app.get('/', function(req, res) {
  res.sendfile(path.resolve(__dirname, 'public', 'index.html'));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to Database


// Define API routes here
//app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
