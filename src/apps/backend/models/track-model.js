const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Track = new Schema(
    {
        spotify_id: { type: String, required: true },
    },
    { timestamps: true },
);

module.exports = mongoose.model('tracks', Track); // exports to users collection
