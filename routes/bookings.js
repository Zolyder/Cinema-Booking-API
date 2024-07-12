'use strict';
const express = require('express');
const router = express.Router();
const models = require('../models');
const crudController = require('../controllers/crudController');
const bookingController = require('../controllers/bookingController');
const auth = require('../middleware/auth');

const bookingCrud = crudController(models.Booking);

router.get('/', bookingCrud.findAll);
router.get('/:id', bookingCrud.findOne);
router.put('/:id', bookingCrud.update);
router.delete('/:id', bookingCrud.remove);

// Create new booking
router.post('/', auth, bookingController.create);
// Get confirmation booking
router.get('/:id/confirmation', auth, bookingController.getConfirmation);

module.exports = router;
