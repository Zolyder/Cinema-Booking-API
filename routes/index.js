'use strict';
const express = require('express');
const router = express.Router();

const bookerRoutes = require('./bookers');
const bookingRoutes = require('./bookings');
const auditoriumRoutes = require('./auditoriums');
const seatRoutes = require('./seats');

router.use('/v1/bookers', bookerRoutes);
router.use('/v1/bookings', bookingRoutes);
router.use('/v1/auditoriums', auditoriumRoutes);
router.use('/v1/seats', seatRoutes);

module.exports = router;
