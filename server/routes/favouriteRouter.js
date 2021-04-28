const express = require("express");
const favouriteRouter = express.Router();

const {
  createFavourite,
  getAll,
  deleteById,
  deleteAll,
} = require("../controllers/favoritesController");
recipeRouter.post("/", createFavourite);
recipeRouter.get("/", getAll);
recipeRouter.delete("/", deleteAll);
recipeRouter.delete("/byid/:id", deleteById);

module.exports = favouriteRouter;
