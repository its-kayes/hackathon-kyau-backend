import httpStatus from "http-status";
import { throwResponse } from "../../../shared/throwResponse";
import catchAsync from "../../../util/catchAsync";
import { ISmartVillageReg } from "./reg.interface";
import { SmartVillageService } from "./reg.service";
import AppError from "../../../errors/AppError";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import { SmartVillageReg } from "./reg.model";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const addUser = catchAsync(async (req: Request, res: Response) => {
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

const login = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body as ISmartVillageReg;

  const isUser = await SmartVillageReg.findOne({ email });
  if (!isUser) {
    throw new AppError("User not found", httpStatus.NOT_FOUND);
  }

  const isPasswordMatch = await bcrypt.compare(
    password as string,
    isUser.password as string
  );

  if (!isPasswordMatch)
    throw new AppError("Password not match", httpStatus.BAD_REQUEST);

  throwResponse(res, isUser, httpStatus.OK, "User Login Successfully", true);
});

export const SmartVillageController = {
  addUser,
  login,
};
