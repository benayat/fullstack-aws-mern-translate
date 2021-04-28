const mongoose = require("mongoose");
const FavouriteSchema = require("mongoose").model("recipe").schema;
const Favourite = mongoose.model("favourite", FavouriteSchema);
module.exports = Favourite;
