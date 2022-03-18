import { IButton } from "../../../interfaces/button.interface";

export abstract class Button implements IButton {
  public abstract text: string;
  public abstract onClick: () => void;
}
