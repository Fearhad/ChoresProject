const mongoose = require("mongoose");
const db = require(".");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const choresSeed = [
  {
    name: "Make a Bed",
    value: 20  // range: 1 < x <=  50
    assignedTo: "Gaby",
    canBid: true,
    bidValue: 100, //  range: 1 < x <=  value
    frequency: "daily" // dayly, Weekly, Monthly
  },
  {
    name: "Clean Bedroom",
    value: 20  // range: 1 < x <=  50
    assignedTo: "Karen",
    canBid: true,
    bidValue: 100, //  range: 1 < x <=  value
    frequency: "daily" // dayly, Weekly, Monthly
  },
  {
    name: "Unload dishwasher",
    value: 20  // range: 1 < x <=  50
    assignedTo: "Gaby",
    canBid: true,
    bidValue: 100, //  range: 1 < x <=  value
    frequency: "daily" // dayly, Weekly, Monthly
  },
  
  
];

db.Chores
  .remove({})
  .then(() => db.Chores.collection.insertMany(choresSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
