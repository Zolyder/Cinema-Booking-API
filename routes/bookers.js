'use strict';
const express = require('express');
const router = express.Router();
const models = require('../models');
const crudController = require('../controllers/crudController');

const bookerController = crudController(models.Booker);

router.post('/', bookerController.create);
router.get('/', bookerController.findAll);
router.get('/:id', bookerController.findOne);
router.put('/:id', bookerController.update);
router.delete('/:id', bookerController.remove);

module.exports = router;
