const express = require("express");
const cors = require("cors");
const recipeRouter = express.Router();

const {
  createRecipe,
  deleteRecipe,
  getALl,
} = require("../controllers/recipeController");
recipeRouter.post("/", createRecipe);

recipeRouter.delete("/:id", deleteRecipe);

module.exports = recipeRouter;
