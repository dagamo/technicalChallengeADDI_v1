import "./style.css";
interface IMember {
  firstName: string;
  lastName: string;
  email: string;
  birthdate: string;
  thumbnailUrl: string;
}

const Member = (props: IMember) => {
  const { firstName, lastName, email, birthdate, thumbnailUrl } = props;

  return (
    <tbody>
      <tr>
        <td></td>
        <td>
          <div className="member__container">
            <img className="member__img" src={thumbnailUrl} alt="user" />
            <p className="member__text">{firstName}</p>
          </div>
        </td>
        <td>{email}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{birthdate}</td>
      </tr>
    </tbody>
  );
};

export default Member;
