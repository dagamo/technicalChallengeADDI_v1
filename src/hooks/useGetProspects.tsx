import { useReducer, useState } from "react";
import { initialState, prospectReducer } from "./../reducers/prospects";
import { ProspectService } from "../services/prospects";
import { ProspectType } from "../types/prospectTypesReducer";

export const useGetProspects = () => {
  const prospectService = new ProspectService();
  const [loading, setLoading] = useState<boolean>(false);
  const [state, dispatch] = useReducer(prospectReducer, initialState);

  const getProspects = async () => {
    setLoading(true);
    try {
      const result = await prospectService.getProspects();
      if (result.status === 404) {
        return alert("Could not get the prospects data");
      }
      dispatch({ type: ProspectType.ADD_PROSPECTS, payload: result.data });
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  return { loading, prospects: state, getProspects, dispatch };
};
