const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://benayat:fmWAK3TLrJwHxr8@cluster0.det3y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
