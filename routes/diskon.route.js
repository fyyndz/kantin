const express = require('express');
const router = express.Router();
const diskonController = require('../controllers/diskon.controller');

// Get all discounts
router.get('/', diskonController.getAllDiskon);

// Get discount by ID or other key
router.get('/:key', diskonController.findDiskon);

// Create new discount
router.post('/', diskonController.addDiskon);

// Update discount
router.put('/:id', diskonController.updateDiskon);

// Delete discount
router.delete('/:id', diskonController.deleteDiskon);

module.exports = router;
