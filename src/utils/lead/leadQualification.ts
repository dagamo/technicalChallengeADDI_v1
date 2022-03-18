import { ProspectService } from "../../services/prospects";

export class LeadQualification {
  public prospect: ProspectService;
  public setScore: React.Dispatch<React.SetStateAction<number | null>>;
  constructor(setScore: React.Dispatch<React.SetStateAction<number | null>>) {
    this.prospect = new ProspectService();
    this.setScore = setScore;
  }

  public getQualification = async (id: number) => {
    const result = await this.prospect.getProspectQualification(id);
    this.setScore(result.data.score);
    return { score: result.data.score };
  };
}
