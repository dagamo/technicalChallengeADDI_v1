import { ReactNode } from "react";
import "./style.css";

type ComponentProps = {
  children: ReactNode;
  fn: any;
};

const Modal = (props: ComponentProps) => {
  return (
    <section className="modal" id="modal">
      <div className=" modal__container">
        <button onClick={props.fn} className="modal__close">
          x
        </button>
        {props.children}
      </div>
    </section>
  );
};

export default Modal;
