const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Track = new Schema(
    {
        added_at: { type: Date, required: true },
        track: {
            album: {
                album_type: { type: String },
                artists: [
                    {
                        external_urls: {
                            spotify: { type: String },
                        },
                        href: { type: String },
                        id: { type: String },
                        name: { type: String },
                        type: { type: String },
                        uri: { type: String },
                    },
                ],
                available_markets: [{ type: String }],
                external_urls: {
                    spotify: { type: String },
                },
                href: { type: String },
                id: { type: String },
                images: [
                    {
                        height: { type: Number },
                        url: { type: String },
                        width: { type: Number },
                    },
                ],
                name: { type: String },
                release_date: { type: String },
                release_date_precision: { type: String },
                total_tracks: { type: Number },
                type: { type: String },
                uri: { type: String },
            },
            artists: [
                {
                    external_urls: {
                        spotify: { type: String },
                    },
                    href: { type: String },
                    id: { type: String },
                    name: { type: String },
                    type: { type: String },
                    uri: { type: String },
                },
            ],
            available_markets: [{ type: String }],
            disc_number: { type: Number },
            duration_ms: { type: Number },
            explicit: { type: Boolean },
            external_ids: {
                isrc: { type: String },
            },
            external_urls: {
                spotify: { type: String },
            },
            href: { type: String },
            id: { type: String },
            is_local: { type: Boolean },
            name: { type: String },
            popularity: { type: Number },
            preview_url: { type: String },
            track_number: { type: Number },
            type: { type: String },
            uri: { type: String },
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('tracks', Track); // exports to tracks collection
