const express = require('express');
const router = express.Router();
const siswaController = require('../controllers/siswa.controller');

// Get all siswa
router.get('/', siswaController.getAllSiswa);

// Get siswa by ID or other key
router.get('/:key', siswaController.findSiswa);

// Create new siswa
router.post('/', siswaController.addSiswa);

// Update siswa
router.put('/:id', siswaController.updateSiswa);

// Delete siswa
router.delete('/:id', siswaController.deleteSiswa);

module.exports = router;
