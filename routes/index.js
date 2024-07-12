'use strict';
const express = require('express');
const router = express.Router();

const bookerRoutes = require('./bookers');
const bookingRoutes = require('./bookings');
const auditoriumRoutes = require('./auditoriums');

router.use('/v1/bookers', bookerRoutes);
router.use('/v1/bookings', bookingRoutes);
router.use('/v1/auditoriums', auditoriumRoutes);

module.exports = router;
