// import packages
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');

// routes
router.get('/', userController.endpoint);

// export to make importable by 'app.ts'
module.exports = router;
