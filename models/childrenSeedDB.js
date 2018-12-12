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
    image: 'https://image.flaticon.com/icons/svg/186/186037.svg'  
  },
  {
    name: "Autumn",
    points: 0,
    assignedchores: [],
    badgesEarned: [],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjM9d7JVvVLN_Y4F5Lgatl1UNhizGAwuck-pit65Wx2tYvdu1QCg' 
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
