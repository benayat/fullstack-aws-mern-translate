const express = require("express");
const recipeRouter = express.Router();
const {
  createRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

recipeRouter.post("/", createRecipe);
recipeRouter.delete("/:id", deleteRecipe);

module.exports = recipeRouter;
