// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Book Explorer</h1>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookshelf">Bookshelf</NavLink>
        </li>
        <li>
          <NavLink to="/messages">Messages</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
