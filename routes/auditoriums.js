'use strict';
const express = require('express');
const router = express.Router();
const models = require('../models');
const crudController = require('../controllers/crudController');

const auditoriumController = crudController(models.Auditorium);

router.post('/', auditoriumController.create);
router.get('/', auditoriumController.findAll);
router.get('/:id', auditoriumController.findOne);
router.put('/:id', auditoriumController.update);
router.delete('/:id', auditoriumController.remove);

module.exports = router;
