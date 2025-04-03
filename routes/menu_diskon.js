const express = require('express');
const router = express.Router();

const menuDiskonController = require('../controllers/menu_diskon.controller');
const adminStanMiddleware = require("../middleware/middleware");

router.get('/', menuDiskonController.getAllMenuDiskon);

router.get('/search/:key', menuDiskonController.findMenuDiskon);

router.post('/', adminStanMiddleware, menuDiskonController.addMenuDiskon);

router.put('/:id', adminStanMiddleware, menuDiskonController.updateMenuDiskon);

router.delete('/:id', adminStanMiddleware, menuDiskonController.deleteMenuDiskon);

module.exports = router;
