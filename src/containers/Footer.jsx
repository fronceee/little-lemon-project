import React from "react";

function Footer() {
  return (
    <footer>
      <div id="footer-logo">
        <img src="./assets/Logo_Vertical.png" />
      </div>
      <div id="menu-section">
        <h4>
          Doormant
          <br />
          Navigation
        </h4>
        <a>HOME</a>
        <a>ABOUT</a>
        <a>MENU</a>
        <a>RESERVATIONS</a>
        <a>ORDER ONLINE</a>
        <a>LOGIN</a>
      </div>
      <div id="contact-section">
        <h4>Contact</h4>
        <p>Adress</p>
        <p>phone number</p>
        <p>email</p>
      </div>
      <div id="social-section">
        <h4>Social Media Links</h4>
        <p>Adress</p>
        <p>phone number</p>
        <p>email</p>
      </div>
    </footer>
  );
}

export default Footer;
