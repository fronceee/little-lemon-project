import React from "react";
import TestimonialCard from "../components/TestimonialCard";

function Testimonials() {
    const testimonialCards = [...new Array(4)].map(item => <TestimonialCard />)
  return (
    <section>
      <h1>Testimonials</h1>
      <div>
        {testimonialCards}
      </div>
    </section>
  );
}

export default Testimonials;
