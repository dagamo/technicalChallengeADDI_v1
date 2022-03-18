import { useState } from "react";
import { ILead } from "../../../interfaces/lead.interface";
import { IPropspect } from "../../../interfaces/propspect.interface";
import { LeadCardButton } from "../../behaviour/button/leadCardButton";
import LeadCard from "../LeadCard";

interface ILeadCardContainer {
  item: ILead;
  setProspect: (prospect: IPropspect) => void;
}
export const LeadCardContainer = ({
  item,
  setProspect,
}: ILeadCardContainer) => {
  const [statusRegistry, setstatusRegistry] = useState<boolean | null>(null);
  const [statusJuditialRecords, setStatusJuditialRecords] = useState<
    boolean | null
  >(null);
  const [score, setScore] = useState<number | null>(null);

  const buttonBehaviour = new LeadCardButton(
    item,
    setstatusRegistry,
    setStatusJuditialRecords,
    setScore,
    setProspect
  );
  return (
    <LeadCard
      {...item}
      isRegistry={statusRegistry}
      hasJuditialRecords={statusJuditialRecords}
      score={score}
      cardButtonBehaviour={buttonBehaviour}
    />
  );
};
