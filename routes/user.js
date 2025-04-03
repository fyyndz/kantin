const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const { authenticate, authorize } = require("../middleware/auth");

router.get('/', authenticate, authorize("admin_stan"), userController.getAllUser);
router.get('/search/:key', authenticate, authorize("admin_stan"), userController.findUser);

router.post('/', authenticate, authorize("admin_stan"), userController.addUser);
router.put('/:id', authenticate, authorize("admin_stan"), userController.updateUser);
router.delete('/:id', authenticate, authorize("admin_stan"), userController.deleteUser);

module.exports = router;
