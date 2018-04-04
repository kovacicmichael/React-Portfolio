var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ArticleSchema object
// This is similar to a Sequelize model
var PortfolioSchema = new Schema({

  portImg: {
    type: String,
    required: false
  },
  sortOrder: {
    type: Number,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  portDes: {
    type: String,
    required: false
  },
  githubURL: {
    type: String,
    required: false
  },
  liveLink: {
    type: String,
    required: false
  },
  portfolioClicks:
    {
      type: Number,
      required: false
    }
});

// This creates our model from the above schema, using mongoose's model method
var Portfolio = mongoose.model("portfolio", PortfolioSchema);

// Export the Article model
module.exports = Portfolio;