import { IPropspect } from "../interfaces/propspect.interface";
import { ProspectType } from "../types/prospectTypesReducer";

export const initialState: IPropspect[] = [];

export interface ISetProspects {
  type: ProspectType.ADD_PROSPECTS;
  payload: IPropspect[];
}

export interface IUpdateProspects {
  type: ProspectType.UPDATE_PROSPECTS;
  payload: IPropspect[];
}

export type TProspectAction = ISetProspects | IUpdateProspects;

export const prospectReducer = (
  state: IPropspect[],
  action: TProspectAction
) => {
  switch (action.type) {
    case ProspectType.ADD_PROSPECTS: {
      console.log("*validation adding prospects", action.payload);
      return [...state, ...action.payload];
    }

    default: {
      return [...state];
    }
  }
};
