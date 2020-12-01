import React, { useEffect, useState } from "react";

import UserList from "./UserList";
import UserSearch from "./UserSearch";

const UserContainer = () => {
  const [users, setUsers] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearchTerm(() => term);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("/users.json")
        .then((response) => response.json())
        .then((data) => setUsers(data.users));
    }, 500);
  }, []);

  if (users) {
    let filteredUsers = users.filter((user) => {
      const fullName = `${user.name} ${user.surname}`;
      return fullName
        .toLowerCase()
        .split(" ")
        .join("")
        .includes(searchTerm.toLowerCase().split(" ").join(""));
    });

    return (
      <>
        <UserSearch handleSearch={handleSearch} />
        <UserList users={filteredUsers} />
      </>
    );
  } else {
    return <p className="loading">Loading users...</p>;
  }
};

export default UserContainer;
