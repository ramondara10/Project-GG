const mongoose = require("mongoose");
const db = require("../models");

// this should empty the file and inserts new stuff below

mongoose.connect(
    process.env.MONGODB_URI ||
    ""
);

const gameSeed = {

}

db.Game
.remove({})
.then(() => db.Game.collection.insertMany(gameSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});