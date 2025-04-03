const express = require("express");
const router = express.Router();

const menuController = require("../controllers/menu.controller");
const { authenticate, authorize } = require("../middleware/auth");

router.get("/", menuController.getAllMenu);
router.get("/search/:key", menuController.findMenu);

router.post("/", authenticate, authorize("admin_stan"), menuController.createMenu);
router.put("/:id", authenticate, authorize("admin_stan"), menuController.updateMenu);
router.delete("/:id", authenticate, authorize("admin_stan"), menuController.deleteMenu);

module.exports = router;
