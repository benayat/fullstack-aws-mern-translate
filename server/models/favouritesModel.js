const mongoose = require("mongoose");
const FavouriteSchema = require("mongoose").model("recipe").schema;
export const Favourite = mongoose.model("favourite", FavouriteSchema);
