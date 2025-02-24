const express = require('express');
const router = express.Router();
const transaksiController = require('../controllers/transaksi.controller');

// Get all transactions
router.get('/', transaksiController.getAllTransaksi);

// Get transaction by ID or other key
router.get('/:key', transaksiController.findTransaksi);

// Create new transaction
router.post('/', transaksiController.addTransaksi);

// Update transaction
router.put('/:id', transaksiController.updateTransaksi);

// Delete transaction
router.delete('/:id', transaksiController.deleteTransaksi);

module.exports = router;
