const express = require('express');
const router = express.Router();
const menuDiskonController = require('../controllers/menu_diskon.controller');

// Get all menu discounts
router.get('/', menuDiskonController.getAllMenuDiskon);

// Get menu discount by ID or other key
router.get('/:key', menuDiskonController.findMenuDiskon);

// Create new menu discount
router.post('/', menuDiskonController.addMenuDiskon);

// Update menu discount
router.put('/:id', menuDiskonController.updateMenuDiskon);

// Delete menu discount
router.delete('/:id', menuDiskonController.deleteMenuDiskon);

module.exports = router;
