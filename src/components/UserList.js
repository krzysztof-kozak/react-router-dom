import React from "react";

import User from "./User";

const UserList = ({ users }) => {
  const showUsers = () => {
    if (users) {
      return users.map((user) => {
        return <User key={user.id} user={user} showUsers={showUsers} />;
      });
    }
  };

  return <>{showUsers()}</>;
};

export default UserList;
