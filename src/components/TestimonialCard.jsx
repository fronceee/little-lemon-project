import React from "react";

function TestimonialCard() {
  const stars = [...new Array(5)].map((item) => (
    <img src="./assets/Star.png" />
  ));
  return (
    <div className="testimonial-card">
      <div>{stars}</div>
      <div>
        <img
          src="./assets/review_pro_pic.png"
          alt="Testimonial Profile Picture"
        />
        <p className="testimonial-name">Sara Lopez</p>
        <p className="testimonial-username">Sara72</p>
      </div>
      <p>“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”</p>
    </div>
  );
}

export default TestimonialCard;
