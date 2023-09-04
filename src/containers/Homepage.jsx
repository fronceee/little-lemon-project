import React from "react";
import Hero from "./Hero";
import ThisWeekSpecial from "./ThisWeekSpecial";
import Testimonials from "./Testimonials";
import About from "./About"

function Homepage() {
  return (
    <main>
      <Hero />
      <ThisWeekSpecial />
      <Testimonials />
      <About />
    </main>
  );
}

export default Homepage;
