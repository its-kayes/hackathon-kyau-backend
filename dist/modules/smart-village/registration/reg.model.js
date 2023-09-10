"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartVillageReg = void 0;
const mongoose_1 = require("mongoose");
const regSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Name is needed"],
    },
    email: {
        type: String,
        required: [true, "Email is needed"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is needed"],
    },
    role: {
        type: String,
        enum: ["teacher", "student"],
        default: "student",
    },
}, {
    timestamps: true,
});
exports.SmartVillageReg = (0, mongoose_1.model)("smart-village-reg", regSchema);
