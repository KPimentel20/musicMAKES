const mongoose = require('mongoose');

const playlistSchema = mongoose.Schema({
    username: String,
    userId: { type: mongoose.Schema.Types.ObjectId },
    songId: { type: mongoose.Schema.Types.ObjectId },
    artist: String,
    album: String,
})

// 
const songSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref:'User' },
    songUrl: String,
    title: String,
    playlist: [playlistSchema] // embedded Schema
})

module.exports = mongoose.model('Playlist', playlistSchema, 'Song', songSchema);