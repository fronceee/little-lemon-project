import React from "react";
import { v4 as id } from "uuid";

function TestimonialCard() {
  const stars = [...new Array(5)].map((item) => (
    <img src="./assets/Star.png" key={id()} />
  ));
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-stars">{stars}</div>
      <div className="testimonial-card-avatar">
        <img
          src="./assets/review_pro_pic.png"
          alt="Testimonial Profile Picture"
        />
        <div className="testimonial-card-avatar-info">
          <p className="testimonial-name">Sara Lopez</p>
          <p className="testimonial-username">Sara72</p>
        </div>
      </div>
      <p className="testimonial-description">“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”</p>
    </div>
  );
}

export default TestimonialCard;
