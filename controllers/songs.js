const Song = require('../models/song');

module.exports = {
    index
}


async function index(req, res){
    try {
        const songs = await Song.find({}).populate('user').exec()
        res.status(200).json({songs})
    } catch(err){

    }
}