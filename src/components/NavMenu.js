import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = ({ isOpen, closeNav }) => {
  return (
    <nav style={{ display: isOpen ? "flex" : "none" }}>
      <NavLink exact to="/">
        home
      </NavLink>
      <NavLink to="/users">users</NavLink>
      <NavLink to="/about">about</NavLink>
      <button onClick={closeNav}>Close</button>
    </nav>
  );
};

export default NavMenu;
