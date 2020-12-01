import React from "react";

const User = ({ user }) => {
  return (
    <div className="user">
      <p className="user__name">{`${user.name} ${user.surname}`}</p>
      <img
        className="user__picture"
        alt="user profile pic"
        src={user.picture}
      ></img>
    </div>
  );
};

export default User;
