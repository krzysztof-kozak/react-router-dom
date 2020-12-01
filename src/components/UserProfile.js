import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch("/users.json").then((response) =>
      response.json().then((data) => {
        const filteredUsers = data.users.filter(
          (user) => user.id === parseInt(id, 10)
        );
        setUserInfo(() => filteredUsers);
      })
    );
  }, [id]);

  if (userInfo) {
    return userInfo.map((user) => {
      return (
        <article className="profile" key={user.id}>
          <h2 className="profile__title">{`${user.name}' profile`}</h2>
          <hr />
          <p className="profile__text">{`Name: ${user.name}`}</p>
          <p className="profile__text">{`Surname: ${user.surname}`}</p>

          <Link className="profileLink" to="/users">
            Back to users
          </Link>
        </article>
      );
    });
  } else {
    return <p className="loading">Wczytuje dane...</p>;
  }
};

export default UserProfile;
