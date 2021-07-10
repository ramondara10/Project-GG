import mongoose from 'mongoose';
//import { string } from 'prop-types';

const gameSchema = mongoose.Schema({
    title: String,
    description: String,
    genre: String,

});

export default mongoose.model('gamedetails', gameSchema);