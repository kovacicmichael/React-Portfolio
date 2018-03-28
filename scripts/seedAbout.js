const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/porfolioDB",
  
);



const about = [
  {
    bioImage: "http://via.placeholder.com/250x250",
    name: "Michael",
    bio: "This is a little about myself"
  }
]

db.About
  .remove({})
  .then(() => db.About.collection.insertMany(about))
  .then(data => {
    console.log(data)
    console.log(data.insertedCount + " records inserted into About!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });