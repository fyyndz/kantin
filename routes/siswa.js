const express = require("express");
const router = express.Router();

const siswaController = require("../controllers/siswa.controller");
const { authenticate, authorize } = require("../middleware/auth");

router.get("/", siswaController.getAllSiswa);
router.get("/search/:key", siswaController.findSiswa);

router.post("/", authenticate, authorize("admin_stan"), siswaController.addSiswa);
router.put("/:id", authenticate, authorize("admin_stan"), siswaController.updateSiswa);
router.delete("/:id", authenticate, authorize("admin_stan"), siswaController.deleteSiswa);

module.exports = router;
