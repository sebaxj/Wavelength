const express = require('express');
const TrackCtrl = require('../controllers/track-ctrl');

const router = express.Router();

router.get('/track/:query', TrackCtrl.searchTracks);

module.exports = router;
