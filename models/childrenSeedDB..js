const mongoose = require("mongoose");
const db = require(".");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const childrenSeed = [
  {
    name: "Gaby",
    points: 50,
    assignedchores: [{["Make Bed", "Pick up Toys"], ref: 'Children' }],
    badgesEarned: [String]  
  },
  {
    name: "Karen",
    points: 30,
    assignedchores: [{["Load dishwasher", "Unload dishwasher"], ref: 'Children' }],
    badgesEarned: [String]  
  },
  
  
];

db.Children
  .remove({})
  .then(() => db.Children.collection.insertMany(childrenSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
