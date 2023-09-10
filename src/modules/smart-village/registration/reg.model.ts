import { Schema, model } from "mongoose";
import { ISmartVillageReg, SmartVillageModel } from "./reg.interface";

const regSchema = new Schema<ISmartVillageReg>(
  {
    name: {
      type: String,
      required: [true, "Name is needed"],
    },
    email: {
      type: String,
      required: [true, "Email is needed"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is needed"],
    },
    role: {
      type: String,
      enum: ["teacher", "student"],
      default: "student",
    },
  },
  {
    timestamps: true,
  }
);

export const SmartVillageReg = model<ISmartVillageReg, SmartVillageModel>(
  "smart-village-reg",
  regSchema
);
