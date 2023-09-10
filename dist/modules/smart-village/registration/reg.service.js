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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartVillageService = void 0;
const reg_controller_1 = require("./reg.controller");
const reg_model_1 = require("./reg.model");
const addUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const hashPass = yield (0, reg_controller_1.hashPassword)(data.password);
    data.password = hashPass;
    const result = yield reg_model_1.SmartVillageReg.create(data);
    return result;
});
exports.SmartVillageService = {
    addUser,
};
