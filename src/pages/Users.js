import React from "react";

import { UserContainer } from "../components";

const Users = ({ color }) => {
  return (
    <article style={{ backgroundColor: color }}>
      <h2>Welcome to the userpage...</h2>
      <UserContainer />
    </article>
  );
};

export default Users;
