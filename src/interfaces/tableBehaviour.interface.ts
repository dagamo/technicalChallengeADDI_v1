import { ReactNode } from "react";

export interface ITableBehaviour<TypeItem> {
  columns: string[];
  renderItem: (item: TypeItem, index: number) => ReactNode;
  data: TypeItem[];
}
