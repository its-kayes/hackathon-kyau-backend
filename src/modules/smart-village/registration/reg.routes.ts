import { Router } from "express";
import { SmartVillageController } from "./reg.controller";

const router: Router = Router();

router.post("/create", SmartVillageController.addUser);
router.post("/login", SmartVillageController.login);

export { router as SmartVillageRegRoutes };
