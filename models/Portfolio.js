var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ArticleSchema object
// This is similar to a Sequelize model
var PortfolioSchema = new Schema({
  // `title` is required and of type String
  bioImg: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  name: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  portfolioClicks:
    {
      type: Number,
      required: false
    }
});

// This creates our model from the above schema, using mongoose's model method
var Portfolio = mongoose.model("Article", PortfolioSchema);

// Export the Article model
module.exports = Portfolio;