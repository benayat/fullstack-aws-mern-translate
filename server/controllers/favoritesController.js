const mongoose = require("mongoose");
const Favourite = require("../models/favouritesModel");
const createFavourite = async (req, res) => {
  try {
    console.log(req.body.url);

    let checkExists = await Favourite.findOne({ url: req.body.url });
    if (checkExists) throw Error("already exists");
    let recipeScrapped = await recipeScrapper(req.body.url);
    recipeScrapped = {
      ...recipeScrapped,
      id: req.body.url.split("/").slice(-1).join(),
    };
    const favourite = await new Favourite(recipeScrapped);
    await favourite.save();
    res.status(201).send(favourite);
  } catch (e) {
    if (e.message === "already exists") {
      res.status(400).send(checkExists);
    }
    console.log(e.message);
    res.status(400).send(e);
  }
};

const getAll = async (req, res) => {
  try {
    const favourites = await Favourite.find({});
    res.status(200).send(favourites);
  } catch (e) {
    res.status(404).send(e);
  }
};
const deleteById = async (req, res) => {
  try {
    const toDelete = await findOneAndDelete({ id: req.params.id });
    res.status(200).send(toDelete);
  } catch (e) {
    res.status(404).send(e);
  }
};
const deleteAll = async (req, res) => {
  try {
    const result = await deleteMany({});
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send(e);
  }
};
module.exports = {
  createFavourite,
  getAll,
  deleteById,
  deleteAll,
};
