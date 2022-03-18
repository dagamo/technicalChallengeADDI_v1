import { TSetOpenModal } from "../../../types/setOpenModal.type";
import { Button } from "./button";

export class AddPropspectButton extends Button {
  public text: string;
  public setOpenModal: TSetOpenModal;
  private getLeads: () => Promise<void>;
  constructor(setOpenModal: TSetOpenModal, getLeads: () => Promise<void>) {
    super();
    this.setOpenModal = setOpenModal;
    this.getLeads = getLeads;
    this.text = "Add Propspects";
  }
  public onClick = () => {
    this.setOpenModal(true);
    this.getLeads();
  };
}
