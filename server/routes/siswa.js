const express = require('express');
const router = express.Router();

const siswaController = require('../controllers/siswa.controller');

router.get('/', siswaController.getAllSiswa);

router.get('/search/:key', siswaController.findSiswa);

router.post('/', siswaController.addSiswa);

router.put('/:id', siswaController.updateSiswa);

router.delete('/:id', siswaController.deleteSiswa);

module.exports = router;
