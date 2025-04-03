const express = require("express");
const router = express.Router();

const diskonController = require("../controllers/diskon.controller");
const { authenticate, authorize } = require("../middleware/auth");

router.get("/", diskonController.getAllDiskon);
router.get("/search/:key", diskonController.findDiskon);

router.post("/", authenticate, authorize("admin_stan"), diskonController.addDiskon);
router.put("/:id", authenticate, authorize("admin_stan"), diskonController.updateDiskon);
router.delete("/:id", authenticate, authorize("admin_stan"), diskonController.deleteDiskon);

module.exports = router;
