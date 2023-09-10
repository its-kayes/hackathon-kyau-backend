"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courses = void 0;
const mongoose_1 = require("mongoose");
const coursesSchema = new mongoose_1.Schema({
    courseName: {
        type: String,
        required: [true, "Course name is needed"],
    },
    courseDescription: {
        type: String,
        required: [true, "Course description is needed"],
    },
    teacher: {
        type: String,
        required: [true, "Teacher is needed"],
    },
});
exports.Courses = (0, mongoose_1.model)("courses", coursesSchema);
