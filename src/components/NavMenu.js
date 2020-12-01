import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = ({ isOpen, closeNav }) => {
  return (
    <nav style={{ display: isOpen ? "flex" : "none" }}>
      <NavLink className="navLink" exact to="/">
        home
      </NavLink>
      <NavLink className="navLink" to="/users" exact>
        users
      </NavLink>
      <NavLink className="navLink" to="/about">
        about
      </NavLink>
      <button onClick={closeNav}>Close</button>
    </nav>
  );
};

export default NavMenu;
