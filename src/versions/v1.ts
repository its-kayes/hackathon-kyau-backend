import { Router } from "express";
import { SmartVillageRegRoutes } from "../modules/smart-village/registration/reg.routes";

const router: Router = Router();

router.use("/smart-village", SmartVillageRegRoutes);

export { router as v1 };
