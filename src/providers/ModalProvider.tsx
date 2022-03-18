import { createContext, useState } from "react";
import { IModalContext } from "../interfaces/modalContext.interface";

export const ModalContext = createContext<IModalContext>({
  openModal: false,
  setOpenModal: (active: boolean) => {},
});

export const ModalProvider = ({ children }: JSX.ElementChildrenAttribute) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const changeStateModal = (active: boolean) => {
    setOpenModal(active);
  };
  return (
    <ModalContext.Provider
      value={{ openModal, setOpenModal: changeStateModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
