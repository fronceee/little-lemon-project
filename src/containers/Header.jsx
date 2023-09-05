import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img id="logo" src="./assets/Logo.svg" />
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/reservations">RESERVATIONS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
