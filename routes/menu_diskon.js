const express = require('express');
const router = express.Router();

const menuDiskonController = require('../controllers/menu_diskon.controller');

router.get('/', menuDiskonController.getAllMenuDiskon);

router.get('/search/:key', menuDiskonController.findMenuDiskon);

router.post('/', menuDiskonController.addMenuDiskon);

router.put('/:id', menuDiskonController.updateMenuDiskon);

router.delete('/:id', menuDiskonController.deleteMenuDiskon);

module.exports = router;
