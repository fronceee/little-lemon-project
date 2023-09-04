import React from "react";
import { v4 as id } from "uuid";
import TestimonialCard from "../components/TestimonialCard";

function Testimonials() {
  const testimonialCards = [...new Array(4)].map((item) => (
    <TestimonialCard key={id()} />
  ));
  return (
    <section id="testimonial">
      <h1 className="heading heading-3">Testimonials</h1>
      <div id="testimonial-cards-div">{testimonialCards}</div>
    </section>
  );
}

export default Testimonials;
