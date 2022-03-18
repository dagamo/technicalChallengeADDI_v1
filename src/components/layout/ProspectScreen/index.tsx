import { ILead } from "../../../interfaces/lead.interface";
import { Button } from "../../behaviour/button/button";
import { ModalLeadsAbstract } from "../../behaviour/modal/modalLeadsAbstract";
import { PageLayout } from "../../common/Page";
import { ModalLeads } from "../ModalLeads";
import { ProspectSection } from "../ProspectSection";
import { ModalLeads as ModalLeadsBehaviour } from "./../../behaviour/modal/modalLeads";

interface IProspectScreen {
  members: ILead[];
  prospectButton: Button;
  leadsModalBehaviour: ModalLeadsAbstract<ILead>;
}
export const ProspectsScreen = ({
  members,
  prospectButton,
  leadsModalBehaviour,
}: IProspectScreen) => {
  return (
    <>
      <ModalLeads<ILead, ModalLeadsBehaviour> {...leadsModalBehaviour} />
      <PageLayout
        title="PROSPECTS"
        Section={
          <ProspectSection
            propspects={members}
            behaviourButton={prospectButton}
          />
        }
      />
    </>
  );
};
