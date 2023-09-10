"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../../errors/AppError"));
const throwResponse_1 = require("../../../shared/throwResponse");
const catchAsync_1 = __importDefault(require("../../../util/catchAsync"));
const courses_service_1 = require("./courses.service");
const courses_model_1 = require("./courses.model");
const addCourses = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield courses_service_1.CoursesService.addCourses(req.body);
    if (!result) {
        return next(new AppError_1.default("No data found", 404));
    }
    (0, throwResponse_1.throwResponse)(res, result, http_status_1.default.OK, "Course added successfully", true);
}));
const getCourses = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield courses_model_1.Courses.find({});
    if (!result) {
        return next(new AppError_1.default("No data found", 404));
    }
    (0, throwResponse_1.throwResponse)(res, result, http_status_1.default.OK, "Courses fetched", true);
}));
exports.CoursesController = {
    addCourses,
    getCourses,
};
