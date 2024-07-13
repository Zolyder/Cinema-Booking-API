'use strict';
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const auth = require('../middleware/auth');


/**
 * @api {post} /bookings Create a new booking
 * @apiName CreateBooking
 * @apiGroup Bookings
 * @apiPermission auth
 *
 * @apiBody {String} showTime Show time.
 * @apiBody {Number} seatId Seat ID.
 * @apiBody {Number} bookerId Booker ID.
 *
 * @apiSuccess {Object} booking Booking details.
 *
 * @apiError InternalServerError The server encountered an internal error.
 */
router.post('/', auth, bookingController.create);

/**
 * @api {get} /bookings/:id/confirmation Get booking confirmation
 * @apiName GetBookingConfirmation
 * @apiGroup Bookings
 * @apiPermission auth
 *
 * @apiParam {Number} id Booking ID.
 *
 * @apiSuccess {Object} booking Booking details.
 * @apiSuccess {String} booking.email Booker email.
 * @apiSuccess {Number} booking.bookingCode Booking ID.
 * @apiSuccess {String} booking.auditorium Auditorium name.
 * @apiSuccess {String} booking.showTime Show time.
 * @apiSuccess {Number} booking.seat Seat number.
 *
 * @apiError NotFound The booking was not found.
 * @apiError Forbidden The user is not authorized to view this booking.
 * @apiError InternalServerError The server encountered an internal error.
 */
router.get('/:id/confirmation', auth, bookingController.getConfirmation);

module.exports = router;
