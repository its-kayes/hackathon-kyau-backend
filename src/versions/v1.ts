import { Router } from "express";
import { SmartVillageRegRoutes } from "../modules/smart-village/registration/reg.routes";
import { CoursesRoutes } from "../modules/smart-village/courses/courses.routes";

const router: Router = Router();

router.use("/smart-village", SmartVillageRegRoutes);
router.use("/smart-village-courses", CoursesRoutes);

export { router as v1 };
