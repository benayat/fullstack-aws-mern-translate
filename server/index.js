const express = require("express");
const cors = require("cors");
require("./db/mongoose");
const path = require("path");
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());

const recipeRouter = require("./routes/recipeRouter");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
} else {
  app.use(express.static(path.join(__dirname, "../client/public")));
}
<<<<<<< HEAD
=======

const proxy = require("http-proxy-middleware");

app.use(cors());
app.use(express.json());
>>>>>>> 6d381bf6423224dc002f655c20938ec31b22e609
app.use("/api/recipes", recipeRouter);

app.listen(port, () => console.log(`application start at ${port}`));
