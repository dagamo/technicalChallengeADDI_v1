import { useReducer, useState } from "react";
import { initialState, leadReducer } from "../reducers/leads";
import { LeadService } from "../services/lead";
import { LeadsType } from "../types/leadTypesReducer";

export const useGetLeads = () => {
  const leadService = new LeadService();
  const [loading, setLoading] = useState<boolean>(false);
  const [state, dispatch] = useReducer(leadReducer, initialState);

  const getLeads = async () => {
    setLoading(true);
    try {
      const result = await leadService.getLeads();
      if (result.status === 404) {
        return alert("Could not get the leads data");
      }

      dispatch({ type: LeadsType.ADD_LEADS, payload: result.data });
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  return { loading, leads: state.leads, getLeads, dispatch };
};
