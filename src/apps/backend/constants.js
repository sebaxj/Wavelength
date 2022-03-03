/**
 * Copyright (c) 2021
 *
 * This file provides the constants used by the application.
 *
 */

MONGO_DB_URL =
    process.env.MONGO_DB_URL ||
    'mongodb+srv://cohogan:Perryplat437!@wavecluster0.iqnqx.mongodb.net/wavelength_prod?retryWrites=true&w=majority';
SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || '4266de3cc8f34e8a81694301744f7c3e';
SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || 'e5b1307ace3e4e648df4e093174d2006';

module.exports = Object.freeze({
    MONGO_DB_URL,
    SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET,
});
