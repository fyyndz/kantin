const express = require("express");
const router = express.Router();

const transaksiController = require("../controllers/transaksi.controller");
const adminStanMiddleware = require("../middleware/middleware");

router.get("/", transaksiController.getAllTransaksi);

router.get("/search/:key", transaksiController.findTransaksi);

router.post("/", adminStanMiddleware, transaksiController.addTransaksi);

router.put("/:id", adminStanMiddleware, transaksiController.updateTransaksi);

router.delete("/:id", adminStanMiddleware, transaksiController.deleteTransaksi);

module.exports = router;
