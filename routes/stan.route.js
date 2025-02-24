const express = require('express');
const router = express.Router();
const stanController = require('../controllers/stan.controller');

// Get all stan
router.get('/', stanController.getAllStan);

// Get stan by ID or other key
router.get('/:key', stanController.findStan);

// Create new stan
router.post('/', stanController.addStan);

// Update stan
router.put('/:id', stanController.updateStan);

// Delete stan
router.delete('/:id', stanController.deleteStan);

module.exports = router;
