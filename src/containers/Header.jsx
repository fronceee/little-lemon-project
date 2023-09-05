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
            <a>ABOUT</a>
          </li>
          <li>
            <a>MENU</a>
          </li>
          <li>
            <Link to="/reservations">RESERVATIONS</Link>
          </li>
          <li>
            <a>ORDER ONLINE</a>
          </li>
          <li>
            <a>LOGIN</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
