import { useContext, useEffect } from "react";
import { ModalContext } from "../../providers/ModalProvider";
import { ILead } from "../../interfaces/lead.interface";
import { AddPropspectButton } from "../../components/behaviour/button/addPropspectsButton";
import { ModalLeads as ModalLeadsBehaviour } from "./../../components/behaviour/modal/modalLeads";
import { Header } from "../../components/layout/Header";
import { ProspectsScreen } from "../../components/layout/ProspectScreen";
import { LeadCardContainer } from "../../components/layout/LeadCardContainer";
import { ProspectsScreenContext } from "../../providers/ProspectsScreenProvider";

export const ProspectPage = () => {
  const {
    prospects,
    getProspects,
    leads,
    getLeads,
    setProspect,
    setNewProspects,
  } = useContext(ProspectsScreenContext);
  const { setOpenModal } = useContext(ModalContext);

  useEffect(() => {
    getProspects();
  }, []);

  const renderItemLead = (item: ILead) => {
    return (
      <LeadCardContainer key={item.id} item={item} setProspect={setProspect} />
    );
  };

  const prospectButton = new AddPropspectButton(setOpenModal, getLeads);
  const leadsModalBehaviour = new ModalLeadsBehaviour(
    leads,
    renderItemLead,
    setNewProspects,
    setOpenModal
  );

  return (
    <>
      <Header title="CRM - TECHNICAL CHALLENGE" />
      <ProspectsScreen
        prospectButton={prospectButton}
        leadsModalBehaviour={leadsModalBehaviour}
        members={prospects}
      />
    </>
  );
};
