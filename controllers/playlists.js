const Playlist = require('../models/playlist');

module.exports = {
    create,
    index
}

async function create(req, res){
    console.log(req.file, req.body, 'this is create method', req.user)
    try {
        let playlist = await Playlist.create({
            user: req.user,
            song: req.body.song,
            artist: req.body.artist,
            album: req.body.album
        })
        playlist = await playlist.populate('user')
        res.status(201).json({playlist: playlist})
    } catch(err){
        console.log(err)
        res.json(400).json({err})
    }
}

async function index(req, res){
    try {

        const playlists = await Playlist.find({user: req.user._id});
        res.status(200).json({playlists: playlists});
    } catch(err){
        res.status(400).json(err)
    }
}