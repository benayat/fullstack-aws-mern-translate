const express = require("express");
const cors = require("cors");
const recipeRouter = express.Router();

const {
  createRecipe,
  deleteRecipe,
  getAll,
} = require("../controllers/recipeController");
recipeRouter.post("/", createRecipe);
recipeRouter.get("/", getAll);
recipeRouter.delete("/:id", deleteRecipe);

module.exports = recipeRouter;
