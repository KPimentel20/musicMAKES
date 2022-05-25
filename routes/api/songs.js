const express = require('express');
const router = express.Router();
const songsCtrl = require('../../controllers/songs');

// /*---------- Public Routes ----------*/
// router.post('/', upload.single('song'), songsCtrl.create);
router.get('/', songsCtrl.index)


/*---------- Protected Routes ----------*/

module.exports = router;