const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const ChildrenDBRouter = require('./routes/children')
const axios = require("axios");
//const socket = require("socket.io");
const app = express();
var bodyParser = require('body-parser')
var cors = require('cors');
var router = express.Router();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const PORT = process.env.PORT || 8080;

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/userdb";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

var db = require("./models");
var login = require('./client/src/pages/loginregister');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make Public a static folder
app.use(express.static(path.join(__dirname, 'client/public')));

app.get('/', function(req, res) {
  res.sendfile(path.resolve(__dirname, 'public', 'index.html'));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// &&&&&&&&&&&&&&&&&& THIS SHOULD BE MOVE &&&&&&&&&&&&&&&&&&&&&&&

//This should be in controllers
//route to handle user registration
router.post('/register',login.register);
router.post('/login',login.login)
app.use('/api', router);

// Handler user registration 



// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Send every other request to the React app
// Define any API routes before this runs
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
