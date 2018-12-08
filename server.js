const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
// const routes = require("./routes");
//const socket = require("socket.io");
const app = express();
const PORT = process.env.PORT || 8081;
const bodyParser = require('body-parser')
const cors = require('cors');


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client/public')));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/choresdb";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Define API routes here
//app.use("/api", routes);

require("./routes/children")(app);

// Make Public a static folder
app.get('/', function(req, res) {
  res.sendfile(path.resolve(__dirname, 'public', 'index.html'));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
