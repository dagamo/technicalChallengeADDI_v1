import { Button } from "../components/behaviour/button/button";
import { TableBehaviour } from "../components/behaviour/table/tableBehaviour";

export interface IModalLeads<TypeLead> {
  addLeadsButton: Button;
  leadsTable: TableBehaviour<TypeLead>;
}
