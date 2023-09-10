"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartVillageRegRoutes = void 0;
const express_1 = require("express");
const reg_controller_1 = require("./reg.controller");
const router = (0, express_1.Router)();
exports.SmartVillageRegRoutes = router;
router.post("/create", reg_controller_1.SmartVillageController.addUser);
router.post("/login", reg_controller_1.SmartVillageController.login);
