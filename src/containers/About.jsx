import React from "react";

function About() {
  return (
    <div id="about">
      <div id="about-text">
        <h1 id="about-title" className="heading heading-1">
          Little Lemon
        </h1>
        <h2 id="about-subtitle" className="heading heading-2">
          Chicago
        </h2>
        <p id="about-paragraph" className="paragraph">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>
      <div id="about-pictures">
        <img id="about-pic-1" src="./assets/restaurant_chef.png" />
        <img id="about-pic-2" src="./assets/Mario_and_Adrian.png" />
      </div>
    </div>
  );
}

export default About;
