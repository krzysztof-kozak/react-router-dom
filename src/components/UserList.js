import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

import User from "./User";

const UserList = ({ users }) => {
  const match = useRouteMatch();
  const url = match.url;

  const showUsers = () => {
    if (users.length) {
      return users.map((user) => {
        return (
          <Link className="userLink" to={`${url}/${user.id}`} key={user.id}>
            <User user={user} showUsers={showUsers} />
          </Link>
        );
      });
    } else {
      return <p className="loading">No results</p>;
    }
  };

  return <>{showUsers()}</>;
};

export default UserList;
