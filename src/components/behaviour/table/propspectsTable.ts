import { ReactNode } from "react";
import { IPropspect } from "../../../interfaces/propspect.interface";
import { TableBehaviour } from "./tableBehaviour";

export class PropspectsTable extends TableBehaviour<IPropspect> {
  public columns: string[];
  public data: IPropspect[];
  public renderItem: (item: IPropspect, index: number) => ReactNode;
  constructor(
    data: IPropspect[],
    renderItem: (item: IPropspect, index: number) => ReactNode
  ) {
    super();
    this.columns = ["Members", "Email", "First Name", "Last Name", "Birthname"];
    this.data = data;
    this.renderItem = renderItem;
  }
}
