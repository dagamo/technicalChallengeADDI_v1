import { ILead } from "../../../interfaces/lead.interface";
import { IPropspect } from "../../../interfaces/propspect.interface";
import { LeadQualification } from "../../../utils/lead/leadQualification";
import { LeadValidations } from "../../../utils/lead/leadValidations";
import { CardButton } from "./cardButton";

export class LeadCardButton extends CardButton {
  public text: string;
  public leadValidations: LeadValidations;
  public leadQualification: LeadQualification;
  public setScore: React.Dispatch<React.SetStateAction<number | null>>;
  public setProspect: (prospect: IPropspect) => void;
  public lead: ILead;
  constructor(
    lead: ILead,
    setRegistry: React.Dispatch<React.SetStateAction<boolean | null>>,
    setJuditialRecords: React.Dispatch<React.SetStateAction<boolean | null>>,
    setScore: React.Dispatch<React.SetStateAction<number | null>>,
    setProspect: (prospect: IPropspect) => void
  ) {
    super(lead.id);
    this.lead = lead;
    this.text = "Validate Lead";
    this.leadValidations = new LeadValidations(
      lead,
      setRegistry,
      setJuditialRecords
    );
    this.leadQualification = new LeadQualification(setScore);
    this.setScore = setScore;
    this.setProspect = setProspect;
  }
  public onClick = async () => {
    const result = await Promise.all([
      this.leadValidations.validateJuditialRecords(this.id),
      this.leadValidations.validateNationalRegistry(this.id),
    ]);
    if (!result[0].hasJuditialRecords || !result[1].isRegistry) {
      return this.setScore(0);
    }
    const { score } = await this.leadQualification.getQualification(this.id);
    if (score > 60) {
      return this.setProspect(this.lead);
    }
  };
}
