const express = require('express');
const router = express.Router();

const stanController = require('../controllers/stan.controller');
const adminStanMiddleware = require("../middleware/middleware");


router.get('/', stanController.getAllStan);

router.get('/search/:key', stanController.findStan);

router.post('/', adminStanMiddleware, stanController.addStan);

router.put('/:id', adminStanMiddleware, stanController.updateStan);

router.delete('/:id', adminStanMiddleware, stanController.deleteStan);

module.exports = router;
