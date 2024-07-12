'use strict';
const express = require('express');
const router = express.Router();
const models = require('../models');
const crudController = require('../controllers/crudController');

const bookingController = crudController(models.Booking);

router.post('/', bookingController.create);
router.get('/', bookingController.findAll);
router.get('/:id', bookingController.findOne);
router.put('/:id', bookingController.update);
router.delete('/:id', bookingController.remove);

module.exports = router;
