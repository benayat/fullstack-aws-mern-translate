const mongoose = require("mongoose");
const Favourite = require("../models/favouritesModel");
const recipeScrapper = require("../scraping/scraping");

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
      console.log("fuck it from if");
      res.status(400).send(checkExists);
    }
    console.log("fuck it");
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
  console.log("delete from server",req.params.id);
  try {
    const toDelete = await Favourite.findOneAndDelete({ id: req.params.id});

    res.status(200).send(toDelete);
  } catch (e) {
    res.status(404).send(e);
  }
};
const deleteAll = async (req, res) => {
  try {
    const result = await Favourite.deleteMany({});
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
