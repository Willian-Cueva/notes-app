const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://clusterwin:123clusterwin1@cluster0.p1swo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((db) => console.log("La base de datos está conectada"))
  .catch(err => console.log(err));
