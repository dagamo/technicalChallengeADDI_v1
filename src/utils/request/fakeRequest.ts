import { IResponse } from "../../interfaces/requestResponse.interface";

export const fakeRequest = <InputData>(
  data: InputData
): Promise<IResponse<InputData>> => {
  return Promise.resolve({
    status: 200,
    data,
  });
};
