const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const path = require("path");
const port = process.env.PORT || 5000;
const app = express();

const recipeRouter = require("./routes/recipeRouter");

app.use(cors());
app.use(express.json());
app.use("/api/recipes", recipeRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
} else {
  app.use(express.static(path.join(__dirname, "../client/public")));
}

const proxy = require("http-proxy-middleware");

app.listen(port, () => console.log(`application start at ${port}`));
