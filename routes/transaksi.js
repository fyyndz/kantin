const express = require("express");
const router = express.Router();

const transaksiController = require("../controllers/transaksi.controller");
const { authenticate, authorize } = require("../middleware/auth");

router.get("/", authenticate, transaksiController.getAllTransaksi);
router.get("/search/:key", authenticate, transaksiController.findTransaksi);

router.post("/", authenticate, authorize("admin_stan"), transaksiController.addTransaksi);
router.put("/:id", authenticate, authorize("admin_stan"), transaksiController.updateTransaksi);
router.delete("/:id", authenticate, authorize("admin_stan"), transaksiController.deleteTransaksi);

module.exports = router;
