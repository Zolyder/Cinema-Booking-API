'use strict';
const express = require('express');
const router = express.Router();
const models = require('../models');
const crudController = require('../controllers/crudController');
const auditoriumController = require('../controllers/auditoriumController');
const auth = require('../middleware/auth');

const auditoriumCrud = crudController(models.Auditorium);

// Show availabilities seats and times
router.get('/availability', auth, auditoriumController.getAvailability);

router.post('/', auditoriumCrud.create);
router.get('/', auditoriumCrud.findAll);
router.get('/:id', auditoriumCrud.findOne);
router.put('/:id', auditoriumCrud.update);
router.delete('/:id', auditoriumCrud.remove);

module.exports = router;
