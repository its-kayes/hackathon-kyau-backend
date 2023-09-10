import { Model } from "mongoose";

export type ISmartVillageReg = {
  name: string;
  email: string;
  password: string;
  role: string;
};

export type SmartVillageModel = Model<
  ISmartVillageReg,
  Record<string, unknown>
>;
