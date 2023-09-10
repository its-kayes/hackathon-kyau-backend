"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesRoutes = void 0;
const express_1 = require("express");
const courses_controller_1 = require("./courses.controller");
const router = (0, express_1.Router)();
exports.CoursesRoutes = router;
router.post("/create", courses_controller_1.CoursesController.addCourses);
