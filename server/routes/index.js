const express = require('express');
const router = express.Router();

// Import your route files
const authRoutes = require('./auth');
const diskonRoutes = require('./diskon');
const menuRoutes = require('./menu');
const menuDiskonRoutes = require('./menu_diskon');
const siswaRoutes = require('./siswa');
const stanRoutes = require('./stan');
const transaksiRoutes = require('./transaksi');
const userRoutes = require('./user');

// Define routes
router.use('/auth', authRoutes);
router.use('/diskon', diskonRoutes);
router.use('/menu', menuRoutes);
router.use('/menu_diskon', menuDiskonRoutes);
router.use('/siswa', siswaRoutes);
router.use('/stan', stanRoutes);
router.use('/transaksi', transaksiRoutes);
router.use('/users', userRoutes);

module.exports = router;

