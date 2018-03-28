const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/porfolioDB",
  
);

const portfolio = [
  {
    portImg: "http://via.placeholder.com/250x250",
    name: "Project Name",
    projectDes: "A cool project",
    portfolioClicks: 0
  }
]

db.Portfolio
  .remove({})
  .then(() => db.Portfolio.collection.insert(portfolio))
  .then(data => {
    console.log(data)
    console.log(data.insertedCount + " records inserted into Portfolio!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
