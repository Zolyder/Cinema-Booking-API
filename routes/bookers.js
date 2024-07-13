'use strict';
const express = require('express');
const router = express.Router();
const bookerController = require('../controllers/bookerController');

/**
 * @api {post} /bookers/register Register a new booker
 * @apiName RegisterBooker
 * @apiGroup Bookers
 *
 * @apiBody {String} name Booker name.
 * @apiBody {String} email Booker email.
 * @apiBody {String} password Booker password.
 *
 * @apiSuccess {String} token JWT token.
 *
 * @apiError UserAlreadyExists The user already exists.
 * @apiError InternalServerError The server encountered an internal error.
 */
router.post('/register', bookerController.register);

/**
 * @api {post} /bookers/login Login a booker
 * @apiName LoginBooker
 * @apiGroup Bookers
 *
 * @apiBody {String} email Booker email.
 * @apiBody {String} password Booker password.
 *
 * @apiSuccess {String} token JWT token.
 *
 * @apiError InvalidCredentials The email or password is invalid.
 * @apiError InternalServerError The server encountered an internal error.
 */
router.post('/login', bookerController.login);

module.exports = router;
