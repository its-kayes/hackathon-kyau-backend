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
exports.SmartVillageController = exports.hashPassword = void 0;
const http_status_1 = __importDefault(require("http-status"));
const throwResponse_1 = require("../../../shared/throwResponse");
const catchAsync_1 = __importDefault(require("../../../util/catchAsync"));
const reg_service_1 = require("./reg.service");
const AppError_1 = __importDefault(require("../../../errors/AppError"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const reg_model_1 = require("./reg.model");
const hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcryptjs_1.default.genSalt(10);
    return yield bcryptjs_1.default.hash(password, salt);
});
exports.hashPassword = hashPassword;
const addUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
        throw new AppError_1.default("Please provide all the details", http_status_1.default.BAD_REQUEST);
    }
    const result = yield reg_service_1.SmartVillageService.addUser({
        name,
        email,
        password,
        role,
    });
    if (!result) {
        throw new AppError_1.default("User not added", http_status_1.default.INTERNAL_SERVER_ERROR);
    }
    (0, throwResponse_1.throwResponse)(res, result, http_status_1.default.OK, "User added successfully", true);
}));
const login = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const isUser = yield reg_model_1.SmartVillageReg.findOne({ email });
    if (!isUser) {
        throw new AppError_1.default("User not found", http_status_1.default.NOT_FOUND);
    }
    const isPasswordMatch = yield bcryptjs_1.default.compare(password, isUser.password);
    if (!isPasswordMatch)
        throw new AppError_1.default("Password not match", http_status_1.default.BAD_REQUEST);
    (0, throwResponse_1.throwResponse)(res, isUser, http_status_1.default.OK, "User Login Successfully", true);
}));
exports.SmartVillageController = {
    addUser,
    login,
};
