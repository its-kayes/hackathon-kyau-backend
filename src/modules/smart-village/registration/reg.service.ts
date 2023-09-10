import { hashPassword } from "./reg.controller";
import { ISmartVillageReg } from "./reg.interface";
import { SmartVillageReg } from "./reg.model";

const addUser = async (data: ISmartVillageReg) => {
  const hashPass = await hashPassword(data.password as string);

  data.password = hashPass;

  const result = await SmartVillageReg.create(data);
  return result;
};

export const SmartVillageService = {
  addUser,
};
