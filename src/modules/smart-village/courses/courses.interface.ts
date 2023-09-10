import { Model } from "mongoose";

export type ICourses = {
  courseName: string;
  courseDescription: string;
  teacher: string;
  image: string;
};

export type CoursesModel = Model<ICourses, Record<string, unknown>>;
