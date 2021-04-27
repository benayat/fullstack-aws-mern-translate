const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  calories: {
    type: String,
  },
  howToMake: {
    type: [String],
  },
  ingredients: {
    type: [String],
  },
  picture: {
    type: String,
  },
  time: {
    type: String,
  },
  id: {
    type: String,
  },
});

const Recipe = new mongoose.model("recipe", recipeSchema);

module.exports = Recipe;
