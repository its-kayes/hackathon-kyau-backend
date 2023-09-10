"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1 = void 0;
const express_1 = require("express");
const reg_routes_1 = require("../modules/smart-village/registration/reg.routes");
const router = (0, express_1.Router)();
exports.v1 = router;
router.use("/smart-village", reg_routes_1.SmartVillageRegRoutes);
