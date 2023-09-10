import httpStatus from "http-status";
import AppError from "../../../errors/AppError";
import { throwResponse } from "../../../shared/throwResponse";
import catchAsync from "../../../util/catchAsync";
import { CoursesService } from "./courses.service";
import { NextFunction, Request, Response } from "express";
import { Courses } from "./courses.model";

const addCourses = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CoursesService.addCourses(req.body);

    if (!result) {
      return next(new AppError("No data found", 404));
    }

    throwResponse(
      res,
      result,
      httpStatus.OK,
      "Course added successfully",
      true
    );
  }
);

const getCourses = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await Courses.find({});

    if (!result) {
      return next(new AppError("No data found", 404));
    }

    throwResponse(res, result, httpStatus.OK, "Courses fetched", true);
  }
);

export const CoursesController = {
  addCourses,
  getCourses,
};
