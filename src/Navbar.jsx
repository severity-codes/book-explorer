// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Book Explorer</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/bookshelf">Bookshelf</a>
        </li>
        <li>
          <a href="/messages">Messages</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
