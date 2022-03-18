import { fakeRequest } from "../utils/request/fakeRequest";
import db from "../db/db.json";
import { IResponse } from "../interfaces/requestResponse.interface";
import { randomValue } from "../utils/random/randomValue";

interface IResponseQualification {
  score: number;
}

export class ProspectService {
  public getProspects = async () => {
    const data = await fakeRequest(db.members);
    return data;
  };
  public getProspectQualification = async (
    id: number
  ): Promise<IResponse<IResponseQualification>> => {
    return new Promise((resolve) => {
      setTimeout(async () => {
        let data: IResponse<IResponseQualification> = await fakeRequest({
          score: randomValue(0, 100),
        });
        resolve(data);
      }, 1000);
    });
  };
}
