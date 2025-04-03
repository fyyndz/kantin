const express = require("express");
const router = express.Router();

const menuController = require("../controllers/menu.controller");
const adminStanMiddleware = require("../middleware/middleware");

router.get("/", menuController.getAllMenu);

router.get("/search/:key", menuController.findMenu);

router.post("/", adminStanMiddleware, menuController.createMenu);

router.put("/:id", adminStanMiddleware, menuController.updateMenu);

router.delete("/:id", adminStanMiddleware, menuController.deleteMenu);

module.exports = router;
