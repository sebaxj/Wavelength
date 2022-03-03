const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        user_name: { type: String, required: true },
        avatar: { type: String, required: true },
        friends: [{ type: [Schema.Types.ObjectId], ref: 'users', required: true}],
        
        spotify_connected: { type: Boolean, required: true },
        spotify_access_token: { type: String, required: false },
        spotify_refresh_token: { type: String, required: false },

    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User) // exports to users collection