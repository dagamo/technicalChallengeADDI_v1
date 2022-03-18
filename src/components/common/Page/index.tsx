import { ReactNode } from "react";
import { Container } from "../Container";

interface IPageLayout {
  title: string;
  Section: ReactNode;
}

export const PageLayout = ({ title, Section }: IPageLayout) => {
  return (
    <>
      <Container>
        <h1 className="title">{title}</h1>
      </Container>
      {Section}
    </>
  );
};
