import { Courses } from "./courses.model";

const addCourses = async (data: any) => {
  const result = await Courses.create(data);
  return result;
};

export const CoursesService = {
  addCourses,
};
