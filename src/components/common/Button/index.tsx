import { Button } from "../../behaviour/button/button";
import "./style.css";

const ButtonComponent = <InputButton extends Button>({
  onClick,
  text,
}: InputButton) => {
  return (
    <button onClick={onClick} className="btn">
      {text}
    </button>
  );
};

export default ButtonComponent;
