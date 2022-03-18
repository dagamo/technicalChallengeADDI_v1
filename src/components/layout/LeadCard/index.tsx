import { CardButton } from "../../behaviour/button/cardButton";
import Button from "../../common/Button";
import { Status } from "../../common/Status";
import "./style.css";

interface ILeadCard {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthdate: string;
  thumbnailUrl: string;
  cardButtonBehaviour: CardButton;
  isRegistry: boolean | null;
  hasJuditialRecords: boolean | null;
  score: number | null;
}

const LeadCard = (props: ILeadCard) => {
  const {
    firstName,
    lastName,
    email,
    birthdate,
    thumbnailUrl,
    isRegistry,
    hasJuditialRecords,
    score,
    cardButtonBehaviour,
  } = props;
  const pendingVerification = <small>Pending Verification</small>;
  return (
    <tbody>
      <tr>
        <td></td>
        <td>
          <div className="client__container">
            <img className="client__img" src={thumbnailUrl} alt="user" />
            <p className="client__text">{firstName}</p>
          </div>
        </td>
        <td>{email}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{birthdate}</td>
        <td>
          {isRegistry === null ? (
            pendingVerification
          ) : (
            <Status isValid={isRegistry} />
          )}
        </td>
        <td>
          {hasJuditialRecords === null ? (
            pendingVerification
          ) : (
            <Status isValid={hasJuditialRecords} />
          )}
        </td>
        <td>{score === null ? pendingVerification : score}</td>

        <td>
          <Button {...cardButtonBehaviour} />
        </td>
      </tr>
    </tbody>
  );
};

export default LeadCard;
