import { createContext, useState } from "react";
import { useGetLeads } from "../hooks/useGetLeads";
import { useGetProspects } from "../hooks/useGetProspects";
import { ILead } from "../interfaces/lead.interface";
import { IPropspect } from "../interfaces/propspect.interface";
import { LeadsType } from "../types/leadTypesReducer";
import { ProspectType } from "../types/prospectTypesReducer";

export interface IProspectsScreenContext {
  leads: ILead[];
  prospects: IPropspect[];
  setProspect: (prospect: IPropspect) => void;
  setNewProspects: () => void;
  getProspects: () => Promise<void>;
  getLeads: () => Promise<void>;
}

export const ProspectsScreenContext = createContext<IProspectsScreenContext>({
  leads: [],
  prospects: [],
  setProspect: (prospect: IPropspect) => {},
  setNewProspects: () => {},
  getProspects: async () => {},
  getLeads: async () => {},
});

export const ProspectsScreenProvider = ({
  children,
}: JSX.ElementChildrenAttribute) => {
  const { prospects, getProspects, dispatch } = useGetProspects();
  const { leads, getLeads, dispatch: dispatchLeads } = useGetLeads();
  const [newProspects, setProspect] = useState<IPropspect[]>([]);

  const setNewProspect = (prospect: IPropspect) => {
    setProspect((prospects) => [...prospects, prospect]);
  };
  const addAllProspects = () => {
    dispatch({ type: ProspectType.ADD_PROSPECTS, payload: newProspects });
    dispatchLeads({ type: LeadsType.UPDATE_LEAD, payload: newProspects });
    setProspect([]);
  };
  return (
    <ProspectsScreenContext.Provider
      value={{
        prospects,
        leads,
        getProspects,
        getLeads,
        setProspect: setNewProspect,
        setNewProspects: addAllProspects,
      }}
    >
      {children}
    </ProspectsScreenContext.Provider>
  );
};
