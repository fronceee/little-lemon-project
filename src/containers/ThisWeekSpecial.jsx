import React from "react";
import GeneralButton from "../components/GeneralButton";
import SpecialMenuCard from "../components/SpecialMenuCard";

function ThisWeekSpecial() {
  return (
    <section id="this-week-section">
      <div id="this-week-heading-div">
        <h1 className="heading heading-1">This weeks specials!</h1>
        <GeneralButton>Online Menu</GeneralButton>
      </div>
      <div id="menu-cards-div">
        <SpecialMenuCard
          name="Greek salad"
          src="./assets/greek_salad.jpg"
          price="12.99"
          alt="Greek Salad"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        />
        <SpecialMenuCard
          name="Bruchetta"
          src="./assets/Bruchetta.png"
          price="5.99"
          alt="Bruchetta"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        />
        <SpecialMenuCard
          name="Lemon Dessert"
          src="./assets/lemon_dessert.jpg"
          price="5.00"
          alt="Lemon Dessert"
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </div>
    </section>
  );
}

export default ThisWeekSpecial;
