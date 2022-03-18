import { ReactNode } from "react";
import { ILead } from "../../../interfaces/lead.interface";
import { TableBehaviour } from "./tableBehaviour";

export class LeadsTable extends TableBehaviour<ILead> {
  public columns: string[];
  public data: ILead[];
  public renderItem: (item: ILead, index: number) => ReactNode;
  constructor(
    data: ILead[],
    renderItem: (item: ILead, index: number) => ReactNode
  ) {
    super();
    this.columns = [
      "Potential",
      "Email",
      "First Name",
      "Last Name",
      "Birth Date",
      "Registry Identification",
      "Juditial Records",
      "Score",
      "",
    ];
    this.data = data;
    this.renderItem = renderItem;
  }
}
