import { Router } from "express";
import { CoursesController } from "./courses.controller";

const router: Router = Router();

router.post("/create", CoursesController.addCourses);

export { router as CoursesRoutes };
