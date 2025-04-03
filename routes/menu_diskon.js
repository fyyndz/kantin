const express = require("express");
const router = express.Router();

const menuDiskonController = require("../controllers/menu_diskon.controller");
const { authenticate, authorize } = require("../middleware/auth");

router.get("/", menuDiskonController.getAllMenuDiskon);
router.get("/search/:key", menuDiskonController.findMenuDiskon);

router.post("/", authenticate, authorize("admin_stan"), menuDiskonController.addMenuDiskon);
router.put("/:id", authenticate, authorize("admin_stan"), menuDiskonController.updateMenuDiskon);
router.delete("/:id", authenticate, authorize("admin_stan"), menuDiskonController.deleteMenuDiskon);

module.exports = router;
