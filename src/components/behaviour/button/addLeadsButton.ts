import { Button } from "./button";

export class AddLeadsButton extends Button {
  public text: string;
  public setNewProspects: () => void;
  constructor(setNewProspects: () => void) {
    super();
    this.text = "Add Leads";
    this.setNewProspects = setNewProspects;
  }
  public onClick = () => {
    this.setNewProspects();
  };
}
