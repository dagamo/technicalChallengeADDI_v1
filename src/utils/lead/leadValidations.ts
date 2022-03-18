import { ILead } from "../../interfaces/lead.interface";
import { LeadService } from "../../services/lead";

export class LeadValidations {
  public LeadService: LeadService;
  public setRegistry: React.Dispatch<React.SetStateAction<boolean | null>>;
  public setJuditialRecords: React.Dispatch<
    React.SetStateAction<boolean | null>
  >;
  public lead: ILead;
  constructor(
    lead: ILead,
    setRegistry: React.Dispatch<React.SetStateAction<boolean | null>>,
    setJuditialRecords: React.Dispatch<React.SetStateAction<boolean | null>>
  ) {
    this.LeadService = new LeadService();
    this.lead = lead;
    this.setRegistry = setRegistry;
    this.setJuditialRecords = setJuditialRecords;
  }
  public validateJuditialRecords = async (id: number) => {
    const result = await this.LeadService.validateJuditialRecords(id);
    this.setJuditialRecords(result.data.hasJuditialRecords);
    return { hasJuditialRecords: result.data.hasJuditialRecords };
  };
  public validateNationalRegistry = async (id: number) => {
    const result = await this.LeadService.validateNationalRegistryId(id);
    this.setRegistry(result.data.isRegistry);
    return { isRegistry: result.data.isRegistry };
  };
}
