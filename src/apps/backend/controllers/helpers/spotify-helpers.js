const constants = require('../../constants')
const axios = require('axios')
const { response } = require('express')

const refresh_token_url = 'https://accounts.spotify.com/api/token'
const encoded_header = Buffer.from(constants.SPOTIFY_CLIENT_ID + ':' + constants.SPOTIFY_CLIENT_SECRET).toString('base64')

// getAccessToken = async (refreshToken) => {

//     try {
//         response = await axios.post(refresh_token_url, {
//             headers: { 
//                 'Authorization': `Basic ${encoded_header}`,
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             data: {
//                 'refresh_token': refreshToken,
//                 'grant_type': 'refresh_token'
//             }
//         });

//         refreshToken = response.data.refresh_token
//         accessToken = response.data.access_token

//         return { refreshToken, accessToken }
//     } catch (error) {
//         return error
//     }
    
    // constants.SPOTIFY_CLIENT_ID
    // var data = qs.stringify({
    // 'refresh_token': 'AQCxH9WmuHwjYZeKswFBankb585X5JWpN09IVM7VKHERtv1wZkBaJMJD78glDn190b7sUMm-4Z6QfQ68e-FdhkPj9kpfGlkcwHxpnW68kQWAxK6G1PNJ_B0-FSmRZDfmxgY',
    // 'grant_type': 'refresh_token' 
    // });
    // var config = {
    // method: 'post',
    // url: 'https://accounts.spotify.com/api/token',
    // headers: { 
    //     'Authorization': 'Basic NDI2NmRlM2NjOGYzNGU4YTgxNjk0MzAxNzQ0ZjdjM2U6ZTViMTMwN2FjZTNlNGU2NDhkZjRlMDkzMTc0ZDIwMDY', 
    //     'Content-Type': 'application/x-www-form-urlencoded', 
    //     'Cookie': '__Host-device_id=AQC8S9-JnJ7ZHpkJ7PPyy8JDfe0VXm7JkJ0ZrcxHcFVbJVklP_YJhCru8Q60CbeB4m1vwXDIbqW_B8X2GLZxskt9jpHv2sTzis4; __Host-sp_csrf_sid=8599e72a038d53c54149da15da91c2f43d96bc88c5ea85a3e31abe41042d0d2f; __Secure-TPASESSION=AQBKXRZkIP8fhuXEYu9B9+qR4V5jShsZNyetgXapp1lo6HLuusvu4eVxWslUvdeUDjjvpTyS4FLEn7EzQg9yXvvwtDd0OrxVB0o=; inapptestgroup=; sp_sso_csrf_token=013acda7194e85b47cf8e7280565f1eeb590a8ca1a31363436313830303530323734; sp_tr=false'
    // },
    // data : data
    // };

    // axios(config)
    // .then(function (response) {
    // console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    // console.log(error);
    // });
// }


module.exports = {
    // refreshSpotifyToken,
    // getAccessToken
}