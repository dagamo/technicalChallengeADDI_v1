import { ReactNode } from "react";
import { ILead } from "../../../interfaces/lead.interface";
import { AddLeadsButton } from "../button/addLeadsButton";
import { Button } from "../button/button";
import { LeadsTable } from "../table/leadsTable";
import { TableBehaviour } from "../table/tableBehaviour";
import { ModalLeadsAbstract } from "./modalLeadsAbstract";

export class ModalLeads extends ModalLeadsAbstract<ILead> {
  public leadsTable: TableBehaviour<ILead>;
  public addLeadsButton: Button;
  constructor(
    leads: ILead[],
    renderItem: (item: ILead, index: number) => ReactNode,
    setNewProspects: () => void,
    setOpenModal: (active: boolean) => void
  ) {
    super();
    this.addLeadsButton = new AddLeadsButton(setNewProspects, setOpenModal);
    this.leadsTable = new LeadsTable(leads, renderItem);
  }
}
