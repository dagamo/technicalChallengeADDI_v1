import { Button } from "./button";

export class AddLeadsButton extends Button {
  public text: string;
  public setNewProspects: () => void;
  public setOpenModal: (active: boolean) => void;
  constructor(
    setNewProspects: () => void,
    setOpenModal: (active: boolean) => void
  ) {
    super();
    this.text = "Add Leads";
    this.setNewProspects = setNewProspects;
    this.setOpenModal = setOpenModal;
  }
  public onClick = () => {
    this.setNewProspects();
    this.setOpenModal(false);
  };
}
