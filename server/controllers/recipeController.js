const Recipe = require("../models/recipeModel");
const recipeScrapper = require("../scraping/scraping");
const puppeteer = require("puppeteer");

const createRecipe = async (req, res) => {
  try {
    console.log(req.body.url);

    let checkExists = await Recipe.findOne({ url: req.body.url });
    if (checkExists) throw Error("already exists");
    let recipeScrapped = await recipeScrapper(req.body.url);
    recipeScrapped = {
      ...recipeScrapped,
      id: req.body.url.split("/").slice(-1).join(),
    };
    const recipe = await new Recipe(recipeScrapped);
    await recipe.save();
    res.status(201).send(recipe);
  } catch (e) {
    if (e.message === "already exists") {
      res.status(400).send(checkExists);
    }
    console.log(e.message);
    res.status(400).send(e);
  }
};

const deleteRecipe = async (req, res) => {
  try {
    console.log("delete");
    const deleteResult = await Recipe.findOneAndDelete({ id: req.params.id });
    res.status(200).send(deleteResult);
  } catch (e) {
    res.status(400).send(e.message);
  }
};
module.exports = {
  createRecipe,
  deleteRecipe,
};
