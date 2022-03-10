const express = require('express');
const UserCtrl = require('../controllers/user-ctrl');

const router = express.Router();

router.get('/user/:id', UserCtrl.getUserById);
router.get('/users', UserCtrl.getAllUsers);
router.post('/user', UserCtrl.createUser);
router.post('/user/populate', UserCtrl.populateUserFromSpotify);
// router.post('/users/token', UserCtrl.refreshSpotifyToken)

module.exports = router;
