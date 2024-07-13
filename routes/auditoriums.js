'use strict';
const express = require('express');
const router = express.Router();
const auditoriumController = require('../controllers/auditoriumController');
const auth = require('../middleware/auth');

/**
 * @api {get} /auditoriums/availability Show availability of seats and times
 * @apiName GetAvailability
 * @apiGroup Auditoriums
 * @apiPermission auth
 *
 * @apiSuccess {Object[]} availability List of available seats and times.
 * @apiSuccess {String} availability.time Show time.
 * @apiSuccess {Object[]} availability.seats List of seats.
 * @apiSuccess {Number} availability.seats.seatId Seat ID.
 * @apiSuccess {Boolean} availability.seats.booked Seat booked status.
 *
 * @apiError InternalServerError The server encountered an internal error.
 */
router.get('/availability', auth, auditoriumController.getAvailability);

module.exports = router;
