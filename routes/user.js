const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const adminStanMiddleware = require("../middleware/middleware");

router.get('/', userController.getAllUser);

router.get('/search/:key', userController.findUser);

router.post('/', adminStanMiddleware, userController.addUser);

router.put('/:id', adminStanMiddleware, userController.updateUser);

router.delete('/:id', adminStanMiddleware, userController.deleteUser);

module.exports = router;
