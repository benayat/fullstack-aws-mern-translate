const express = require("express");
require("./db/mongoose");
const port = process.env.PORT || 5000;
const app = express();
const recipeRouter = require("./routes/recipeRouter");

app.use(express.json());
app.use("/api/recipes", recipeRouter);

app.listen(port, () => console.log(`application start at ${port}`));
