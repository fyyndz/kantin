const express = require("express");
const router = express.Router();

const diskonController = require("../controllers/diskon.controller");

router.get("/", diskonController.getAllDiskon);

router.get("/search/:key", diskonController.findDiskon);

router.post("/", diskonController.addDiskon);

router.put("/:id", diskonController.updateDiskon);

router.delete("/:id", diskonController.deleteDiskon);

module.exports = router;
