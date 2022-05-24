const Song = require('../models/song');
// const S3 = require('aws-sdk/clients/s3');
// const { v4: uuidv4 } = require('uuid');

// const s3 = new S3();

module.exports = {
    // create,
    index
}

// function create(req, res){
//     console.log(req.file, req.body, 'this is create method', req.user)
//     try {
//         const filePath = `${uuidv4()}/${req.file.originalname}`
//         const params = {Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer};
//         s3.upload(params, async function(err, data){
// 			console.log(err, ' from aws')
//             const song = await Song.create({title: req.body.title, user: req.user, songUrl: songUrl})
//             console.log(song)
// 			// make sure the song we're sending back has the user populated
// 			await song.populate('user');
		
//             res.status(201).json({songs: song})
//         })


//     } catch(err){
//         console.log(err)
//         res.json({data: err})
//     }
// }

async function index(req, res){
    try {
        // this populates the user when you find the songs
        // so you'll have access to the users information 
        // when you fetch the songs
        const songs = await Song.find({}).populate('user').exec()
        res.status(200).json({songs})
    } catch(err){

    }
}