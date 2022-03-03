const User = require('../models/user-model')
const { refreshSpotifyToken, getAccessToken } = require('./helpers/spotify-helpers')

// getUserById = async (req, res) => {
//     await User.findOne({ _id: req.params.id }, (err, user) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }

//         if (!user) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `User not found` })
//         }
//         return res.status(200).json({ success: true, data: user })
//     }).catch(err => console.log(err))
// }

getAllUsers = async (req, res) => {
    await User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!users.length) {
            return res
                .status(404)
                .json({ success: false, error: `No users found` })
        }
        return res.status(200).json({ success: true, data: users })
    }).catch(err => console.log(err))
}

createUser = async (req, res) => {
    // console.log("IN HERE")
    console.log(req.body)
    const newUser = new User({
        user_name: req.body.user_name,
        // user_name_lower: req.body.user_name.toLowerCase(),
    })
    newUser.save()
    res.send({ status: 'SUCCESS' });
}

// get a new access token given a refresh token 
// refreshSpotifyToken = async (req, res) => {
//     const body = req.body
//     await User.find({ _id: body._id }, (err, user) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }
//         if (!user) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `No matching user found` })
//         }

//         const refreshToken = user.spotify_refresh_token
//         const {accessToken, refreshToken} = await refreshSpotifyToken(refreshToken)
//         console.log("ACCESS", accessToken)
        
//         user.spotify_access_token = accessToken
//         user.spotify_refresh_token = refreshToken
//         user.save()
//         res.send({status: "SUCCESS", user: user})

//     }).catch(err => console.log(err))

// }


module.exports = {
    getAllUsers,
    createUser,
    // refreshSpotifyToken
}
