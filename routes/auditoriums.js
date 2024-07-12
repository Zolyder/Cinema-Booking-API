'use strict';
const express = require('express');
const router = express.Router();
const auditoriumController = require('../controllers/auditoriumController');
const auth = require('../middleware/auth');

// Show availabilities seats and times
router.get('/availability', auth, auditoriumController.getAvailability);

module.exports = router;
