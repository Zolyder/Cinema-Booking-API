'use strict';
const express = require('express');
const router = express.Router();
const bookerController = require('../controllers/bookerController');

// Authentication
router.post('/register', bookerController.register);
router.post('/login', bookerController.login);

module.exports = router;
