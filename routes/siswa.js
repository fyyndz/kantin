const express = require('express');
const router = express.Router();

const siswaController = require('../controllers/siswa.controller');
const adminStanMiddleware = require("../middleware/middleware");

router.get('/', siswaController.getAllSiswa);

router.get('/search/:key', siswaController.findSiswa);

router.post('/', adminStanMiddleware, siswaController.addSiswa);

router.put('/:id', adminStanMiddleware, siswaController.updateSiswa);

router.delete('/:id', adminStanMiddleware, siswaController.deleteSiswa);

module.exports = router;
