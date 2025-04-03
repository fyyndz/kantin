const express = require("express");
const router = express.Router();

const stanController = require("../controllers/stan.controller");
const { authenticate, authorize } = require("../middleware/auth");

router.get("/", stanController.getAllStan);
router.get("/search/:key", stanController.findStan);

router.post("/", authenticate, authorize("admin_stan"), stanController.addStan);
router.put("/:id", authenticate, authorize("admin_stan"), stanController.updateStan);
router.delete("/:id", authenticate, authorize("admin_stan"), stanController.deleteStan);

module.exports = router;
