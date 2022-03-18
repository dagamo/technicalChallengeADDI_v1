import { IPropspect } from "../../../interfaces/propspect.interface";
import { Button as ButtonBehaviour } from "../../behaviour/button/button";
import { PropspectsTable } from "../../behaviour/table/propspectsTable";
import ButtonComponent from "../../common/Button";
import { Container } from "../../common/Container";
import Table from "../../common/Table";
import Member from "../Member";

interface ProspectSectionProps {
  propspects: IPropspect[];
  behaviourButton: ButtonBehaviour;
}

export const ProspectSection = ({
  propspects,
  behaviourButton,
}: ProspectSectionProps) => {
  const renderItem = (item: IPropspect) => {
    return <Member key={item.id} {...item} />;
  };

  const tableBehaviour = new PropspectsTable(propspects, renderItem);
  return (
    <Container>
      <div className="button__container">
        <ButtonComponent {...behaviourButton} />
      </div>
      <Table<IPropspect, PropspectsTable> {...tableBehaviour} />
    </Container>
  );
};
