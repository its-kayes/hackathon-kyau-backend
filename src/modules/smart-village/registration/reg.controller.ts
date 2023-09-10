import httpStatus from "http-status";
import { throwResponse } from "../../../shared/throwResponse";
import catchAsync from "../../../util/catchAsync";
import { ISmartVillageReg } from "./reg.interface";
import { SmartVillageService } from "./reg.service";
import AppError from "../../../errors/AppError";

const addUser = catchAsync(async (req, res) => {
  const { name, email, password, role } = req.body as ISmartVillageReg;

  const result = await SmartVillageService.addUser({
    name,
    email,
    password,
    role,
  });

  if (!result) {
    throw new AppError("User not added", httpStatus.INTERNAL_SERVER_ERROR);
  }

  throwResponse(res, result, httpStatus.OK, "User added successfully", true);
});

export const SmartVillageController = {
  addUser,
};
