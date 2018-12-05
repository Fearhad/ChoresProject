const mongoose = require("mongoose");
const db = require(".");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const choresDefault = [
  {
    name: "Make a Bed",
    value: 20  // range: 1 < x <=  50
    assignedTo: "",
    canBid: true,
    bidValue: 100, //  range: 1 < x <=  value
    frequency: "daily" // dayly, Weekly, Monthly
  },
  {
    name: "Clean Bedroom",
    value: 20  // range: 1 < x <=  50
    assignedTo: "",
    canBid: true,
    bidValue: 100, //  range: 1 < x <=  value
    frequency: "daily" // dayly, Weekly, Monthly
  },
  {
    name: "Pick up Toys",
    value: 20  // range: 1 < x <=  50
    assignedTo: "",
    canBid: true,
    bidValue: 100, //  range: 1 < x <=  value
    frequency: "daily" // dayly, Weekly, Monthly
  },
  {
    name: "Load dishwasher",
    value: 20  // range: 1 < x <=  50
    assignedTo: "",
    canBid: true,
    bidValue: 100, //  range: 1 < x <=  value
    frequency: "daily" // dayly, Weekly, Monthly
  },
  {
    name: "Unload dishwasher",
    value: 20  // range: 1 < x <=  50
    assignedTo: "",
    canBid: true,
    bidValue: 100, //  range: 1 < x <=  value
    frequency: "daily" // dayly, Weekly, Monthly
  },
  {
    name: "Wash Dishes",
    value: 20  // range: 1 < x <=  50
    assignedTo: "",
    canBid: true,
    bidValue: 100, //  range: 1 < x <=  value
    frequency: "daily" // dayly, Weekly, Monthly
  },
  {
    name: "Clean Kitchen",
    value: 20  // range: 1 < x <=  50
    assignedTo: "",
    canBid: true,
    bidValue: 100, //  range: 1 < x <=  value
    frequency: "daily" // dayly, Weekly, Monthly
  },
  {
    name: "Countertops",
    value: 20  // range: 1 < x <=  50
    assignedTo: "",
    canBid: true,
    bidValue: 100, //  range: 1 < x <=  value
    frequency: "daily" // dayly, Weekly, Monthly
  },
  {
    name: "Sweep Floor",
    value: 20  // range: 1 < x <=  50
    assignedTo: "",
    canBid: true,
    bidValue: 100, //  range: 1 < x <=  value
    frequency: "daily" // dayly, Weekly, Monthly
  },
  {
    name: "Vacuum Floor",
    value: 20  // range: 1 < x <=  50
    assignedTo: "",
    canBid: true,
    bidValue: 100, //  range: 1 < x <=  value
    frequency: "daily" // dayly, Weekly, Monthly
  },
  
  
  
];

db.Chores
  .remove({})
  .then(() => db.Chores.collection.insertMany(choresDefault))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// Take out Recycling
// Take out TrashLaundry
// Mop Floors
// Dust
// Clean Toilet
// Clean Bathroom sink
// Clean Bathroom countertop
// Clean Stove
// Clean Oven
// Clean Light Fixtures
// Clean Fan Blades
// Clean Windows
// Mow Lawn
// Shovel Driveway
// Fill pet’s water and food bowls
// Set the table
// Fold Laundry
// Empty Indoor Trash cans
// Empty Indoor Recycling bins
// Wash Car
// Rake Leaves
// BabysitWalk the Dog
