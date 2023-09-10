import { Router } from "express";
import { CoursesController } from "./courses.controller";

const router: Router = Router();

router.post("/create", CoursesController.addCourses);

router.get("/get", CoursesController.getCourses);

export { router as CoursesRoutes };
