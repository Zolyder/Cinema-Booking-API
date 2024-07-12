'use strict';
const express = require('express');
const router = express.Router();
const models = require('../models');
const crudController = require('../controllers/crudController');

const seatController = crudController(models.Seat);

router.post('/', seatController.create);
router.get('/', seatController.findAll);
router.get('/:id', seatController.findOne);
router.put('/:id', seatController.update);
router.delete('/:id', seatController.remove);

module.exports = router;
