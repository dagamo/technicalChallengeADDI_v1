import { IButton } from "../../../interfaces/button.interface";

export abstract class CardButton implements IButton {
  public abstract text: string;
  public id: number;
  constructor(id: number) {
    this.id = id;
  }
  public abstract onClick: () => void;
}
