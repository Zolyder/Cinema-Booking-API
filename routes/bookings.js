'use strict';
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const auth = require('../middleware/auth');

// Create new booking
router.post('/', auth, bookingController.create);
// Get confirmation booking
router.get('/:id/confirmation', auth, bookingController.getConfirmation);

module.exports = router;
