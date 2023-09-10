import { Schema, model } from "mongoose";
import { CoursesModel, ICourses } from "./courses.interface";

const coursesSchema = new Schema<ICourses>({
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

export const Courses = model<ICourses, CoursesModel>("courses", coursesSchema);
