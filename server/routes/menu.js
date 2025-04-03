const express = require('express');
const router = express.Router();

const menuController = require('../controllers/menu.controller');

router.get('/', menuController.getAllMenu);

router.get('/search/:key', menuController.findMenu);

router.post('/', menuController.createMenu);

router.put('/:id', menuController.updateMenu);

router.delete('/:id', menuController.deleteMenu);

module.exports = router;
