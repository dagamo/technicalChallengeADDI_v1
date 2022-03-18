import { ReactNode } from "react";
import { ITableBehaviour } from "../../../interfaces/tableBehaviour.interface";

export abstract class TableBehaviour<TypeData>
  implements ITableBehaviour<TypeData>
{
  public abstract columns: string[];
  public abstract data: TypeData[];
  public abstract renderItem: (item: TypeData, index: number) => ReactNode;
}
