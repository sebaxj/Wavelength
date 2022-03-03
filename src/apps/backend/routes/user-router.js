const express = require('express')
const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.get('/users', UserCtrl.getAllUsers)
router.post('/user', UserCtrl.createUser)
// router.post('/users/token', UserCtrl.refreshSpotifyToken)


module.exports = router