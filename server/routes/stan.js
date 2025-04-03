const express = require('express');
const router = express.Router();

const stanController = require('../controllers/stan.controller');

router.get('/', stanController.getAllStan);

router.get('/search/:key', stanController.findStan);

router.post('/', stanController.addStan);

router.put('/:id', stanController.updateStan);

router.delete('/:id', stanController.deleteStan);

module.exports = router;
