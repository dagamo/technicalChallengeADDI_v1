import { fakeRequest } from "../utils/request/fakeRequest";
import db from "../db/db.json";
import { IResponse } from "../interfaces/requestResponse.interface";

interface IResponseValidateNationalRegistryId {
  isRegistry: boolean;
}
interface IResponseJuditialRecords {
  hasJuditialRecords: boolean;
}
export class LeadService {
  public getLeads = async () => {
    const data = await fakeRequest(db.potential);
    return data;
  };
  public validateNationalRegistryId = async (
    id: number
  ): Promise<IResponse<IResponseValidateNationalRegistryId>> => {
    return new Promise((resolve) => {
      const random = Math.random();

      setTimeout(async () => {
        let data: IResponse<IResponseValidateNationalRegistryId> =
          await fakeRequest<IResponseValidateNationalRegistryId>({
            isRegistry: !!random,
          });
        resolve(data);
      }, 1000);
    });
  };

  public validateJuditialRecords = async (
    id: number
  ): Promise<IResponse<IResponseJuditialRecords>> => {
    return new Promise((resolve) => {
      const random = Math.random();
      setTimeout(async () => {
        let data: IResponse<IResponseJuditialRecords> = await fakeRequest({
          hasJuditialRecords: !!random,
        });
        resolve(data);
      }, 1000);
    });
  };
}
