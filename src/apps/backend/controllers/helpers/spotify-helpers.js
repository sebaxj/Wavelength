const constants = require('../../constants');
const axios = require('axios');
const { response } = require('express');

const refresh_token_url = 'https://accounts.spotify.com/api/token';
const encoded_header = Buffer.from(constants.SPOTIFY_CLIENT_ID + ':' + constants.SPOTIFY_CLIENT_SECRET).toString(
    'base64',
);

getMyProfileData = async (access_token) => {
    const config = {
      method: 'get',
      url: 'https://api.spotify.com/v1/me',
      headers: { 
        'Authorization': `Bearer ${access_token}`
      }
    };
    
    return axios(config)
    .then( (response) => {
        return response.data
    })
    .catch( (error) => {
        console.log(error);
    });
}

getMySongData = async (access_token) => {
    const config = {
      method: 'get',
      url: 'https://api.spotify.com/v1/me/tracks',
      headers: { 
        'Authorization': `Bearer ${access_token}`
      },
      params: {
        'limit': '50'
      },
    };
    
    return axios(config)
    .then( (response) => {
        return response.data
    })
    .catch( (error) => {
        console.log(error);
    });
}

module.exports = {
    getMyProfileData,
    getMySongData,
};
