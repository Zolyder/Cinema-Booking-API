'use strict';
const express = require('express');
const router = express.Router();
const models = require('../models');
const crudController = require('../controllers/crudController');
const bookerController = require('../controllers/bookerController');

const bookerCrud = crudController(models.Booker);

// Authentication
router.post('/register', bookerController.register);
router.post('/login', bookerController.login);

router.post('/', bookerCrud.create);
router.get('/', bookerCrud.findAll);
router.get('/:id', bookerCrud.findOne);
router.put('/:id', bookerCrud.update);
router.delete('/:id', bookerCrud.remove);

module.exports = router;
