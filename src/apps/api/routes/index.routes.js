// import packages
const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index.controller.js');

// routes
router.get('/', indexController.endpoint);

// export to make importable by 'app.ts'
module.exports = router;
