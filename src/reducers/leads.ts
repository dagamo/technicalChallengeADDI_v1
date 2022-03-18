import { ILead } from "../interfaces/lead.interface";
import { LeadsType } from "../types/leadTypesReducer";
import _ from "lodash";

export interface ILeadState {
  leads: ILead[];
}
export const initialState: ILeadState = {
  leads: [],
};

export interface ISetLeads {
  type: LeadsType.ADD_LEADS;
  payload: ILead[];
}

export interface IUpdateLead {
  type: LeadsType.UPDATE_LEAD;
  payload: ILead[];
}

export type TLeadsAction = ISetLeads | IUpdateLead;

export const leadReducer = (state: ILeadState, action: TLeadsAction) => {
  switch (action.type) {
    case LeadsType.ADD_LEADS: {
      return {
        leads: [...action.payload],
      };
    }
    case LeadsType.UPDATE_LEAD: {
      const newState = _.differenceBy(state.leads, action.payload);
      return {
        leads: newState,
      };
    }
    default: {
      return { ...state };
    }
  }
};
