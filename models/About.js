var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ArticleSchema object
// This is similar to a Sequelize model
var AboutSchema = new Schema({
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
    required: false
  },
});

// This creates our model from the above schema, using mongoose's model method
var About = mongoose.model("About", AboutSchema);

// Export the Article model
module.exports = About;