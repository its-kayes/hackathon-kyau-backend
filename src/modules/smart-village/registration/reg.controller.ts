import httpStatus from "http-status";
import { throwResponse } from "../../../shared/throwResponse";
import catchAsync from "../../../util/catchAsync";
import { ISmartVillageReg } from "./reg.interface";
import { SmartVillageService } from "./reg.service";
import AppError from "../../../errors/AppError";
import bcrypt from "bcryptjs";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const addUser = catchAsync(async (req, res) => {
  const { name, email, password, role } = req.body as ISmartVillageReg;

  if (!name || !email || !password || !role) {
    throw new AppError(
      "Please provide all the details",
      httpStatus.BAD_REQUEST
    );
  }

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
