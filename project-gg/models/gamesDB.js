const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = mongoose.Schema({
    title: String,
    description: String,
    genre: String,

});

const GameDetails = mongoose.model('gamedetails', gameSchema);

module.exports = GameDetails;