import { Container } from "../../common/Container";
import "./style.css";

interface IHeaderProps {
  title: string;
}

export const Header = ({ title }: IHeaderProps) => {
  return (
    <header className="header">
      <Container>
        <h1>{title}</h1>
      </Container>
    </header>
  );
};
