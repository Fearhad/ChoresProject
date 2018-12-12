const mongoose = require("mongoose");
const db = require(".");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/choresdb"
);

const childrenSeed = [
  {
    name: "Brianna",
    points: 0,
    assignedchores: [],
    badgesEarned: [],
    image: 'Brianna.png'  
  },
  {
    name: "Autumn",
    points: 0,
    assignedchores: [],
    badgesEarned: [],
    image: 'Autumn.png' 
  },
  
  
];

db.children
  .remove({})
  .then(() => db.children.collection.insertMany(childrenSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
