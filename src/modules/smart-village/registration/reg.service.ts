import { ISmartVillageReg } from "./reg.interface";
import { SmartVillageReg } from "./reg.model";

const addUser = async (data: ISmartVillageReg) => {
  const result = await SmartVillageReg.create(data);
  return result;
};

export const SmartVillageService = {
  addUser,
};
