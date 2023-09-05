import React from "react";
import ReserveATableButton from "../components/ReserveATableButton";
import RoundImage from "../components/RoundImage";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="hero">
      <div id="hero-div">
        <h1 id="hero-text" className="heading heading-1">
          Little Lemon
        </h1>
        <h2 id="sub-hero-text" className="heading heading-2">
          Chicago
        </h2>
        <p id="hero-paragraph" className="paragraph">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>

        <Link to="/reservations" aria-label="reserve button">
          <ReserveATableButton />
        </Link>
      </div>

      <RoundImage id="hero-img" src={"./assets/hero.png"} />
    </section>
  );
}

export default Hero;
