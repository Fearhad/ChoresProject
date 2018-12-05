const mongoose = require("mongoose");
const db = require(".");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const familySeed = [
  {
    familyName: "Menocal",
    parents: [{
      userName: "amenocal",
      password: String,
    }],
    familyEmail: String,
    choresList: [{ type: ["Make Bed", "Clean Bedroom", "Pick up Toys", "Load dishwasher","Unload dishwasher"] ref: 'Chores' }],      
    children: [{ type: {"Gaby", "Karen"], ref: 'Family'}]
  },
  
];

db.Family
  .remove({})
  .then(() => db.Family.collection.insertMany(familySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
