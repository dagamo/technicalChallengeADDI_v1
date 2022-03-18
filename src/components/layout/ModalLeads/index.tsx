import { useContext } from "react";
import { ModalContext } from "../../../providers/ModalProvider";
import { ModalLeadsAbstract } from "../../behaviour/modal/modalLeadsAbstract";
import { TableBehaviour } from "../../behaviour/table/tableBehaviour";
import ButtonComponent from "../../common/Button";
import Modal from "../../common/Modal";
import Table from "../../common/Table";
import "./style.css";

export const ModalLeads = <
  TypeLead,
  InputModal extends ModalLeadsAbstract<TypeLead>
>({
  addLeadsButton,
  leadsTable,
}: InputModal) => {
  const { openModal, setOpenModal } = useContext(ModalContext);
  return (
    <>
      {openModal && (
        <Modal fn={() => setOpenModal(false)}>
          <div className="button__container">
            <ButtonComponent {...addLeadsButton} />
          </div>
          <Table<TypeLead, TableBehaviour<TypeLead>> {...leadsTable} />
        </Modal>
      )}
    </>
  );
};
