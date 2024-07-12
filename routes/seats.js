'use strict';
const express = require('express');
const router = express.Router();
const models = require('../models');
const crudController = require('../controllers/crudController');

const seatCrud = crudController(models.Seat);

router.post('/', seatCrud.create);
router.get('/', seatCrud.findAll);
router.get('/:id', seatCrud.findOne);
router.put('/:id', seatCrud.update);
router.delete('/:id', seatCrud.remove);

module.exports = router;
