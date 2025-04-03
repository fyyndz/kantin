const express = require("express");
const router = express.Router();

const diskonController = require("../controllers/diskon.controller");
const adminStanMiddleware = require("../middleware/middleware");

router.get("/", diskonController.getAllDiskon);

router.get("/search/:key", diskonController.findDiskon);

router.post("/", adminStanMiddleware, diskonController.addDiskon);

router.put("/:id", adminStanMiddleware, diskonController.updateDiskon);

router.delete("/:id", adminStanMiddleware, diskonController.deleteDiskon);

module.exports = router;
