import { IModalLeads } from "../../../interfaces/modalLeads.interface";
import { Button } from "../button/button";
import { TableBehaviour } from "../table/tableBehaviour";

export abstract class ModalLeadsAbstract<TypeLead>
  implements IModalLeads<TypeLead>
{
  public abstract leadsTable: TableBehaviour<TypeLead>;
  public abstract addLeadsButton: Button;
}
