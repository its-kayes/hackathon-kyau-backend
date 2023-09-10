import { Router } from "express";
import { SmartVillageController } from "./reg.controller";

const router: Router = Router();

router.post("/create", SmartVillageController.addUser);

export { router as SmartVillageRegRoutes };
