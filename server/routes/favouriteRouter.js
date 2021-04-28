const express = require("express");
const favouriteRouter = express.Router();

const {
  createFavourite,
  getAll,
  deleteById,
  deleteAll,
} = require("../controllers/favoritesController");
favouriteRouter.post("/", createFavourite);
favouriteRouter.get("/", getAll);
favouriteRouter.delete("/", deleteAll);
favouriteRouter.delete("/byid/:id", deleteById);

module.exports = favouriteRouter;
