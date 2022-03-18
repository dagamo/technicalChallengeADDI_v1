import React from "react";
import "./style.css";

const Member = (props: any) => {
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
