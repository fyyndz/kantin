const express = require('express');
const router = express.Router();

const transaksiController = require('../controllers/transaksi.controller');

router.get('/', transaksiController.getAllTransaksi);

router.get('/search/:key', transaksiController.findTransaksi);

router.post('/', transaksiController.addTransaksi);

router.put('/:id', transaksiController.updateTransaksi);

router.delete('/:id', transaksiController.deleteTransaksi);

module.exports = router;
