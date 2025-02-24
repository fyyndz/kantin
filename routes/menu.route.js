const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menu.controller');

// Get all menu items
router.get('/', menuController.getAllMenu);

// Get menu item by ID or other key
router.get('/:key', menuController.findMenu);

// Create new menu item
router.post('/', menuController.addMenu);

// Update menu item
router.put('/:id', menuController.updateMenu);

// Delete menu item
router.delete('/:id', menuController.deleteMenu);

module.exports = router;
