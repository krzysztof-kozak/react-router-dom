import React from "react";
import { Link } from "react-router-dom";

const NavMenu = ({ isOpen, closeNav }) => {
  return (
    <nav style={{ display: isOpen ? "flex" : "none" }}>
      <button onClick={closeNav}>Close</button>
      <Link to="/">home</Link>
      <Link to="/users">users</Link>
      <Link to="/about">about</Link>
    </nav>
  );
};

export default NavMenu;
