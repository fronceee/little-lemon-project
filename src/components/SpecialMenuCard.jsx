import React from "react";

function SpecialMenuCard({ src, alt, name, price, description }) {
  return (
    <div className="card">
      <img className="card-image" src={src} alt={alt} />
      <div>
        <h4 className="heading-text card-title">{name}</h4>
        <p className="paragraph-text price-card">${price}</p>
      </div>
      <p className="paragraph-text cart-description">{description}</p>
      <div>
        <a className="card-link">Order a Delivery</a>
        <img src="./assets/delivery_bike.svg" />
      </div>
    </div>
  );
}

export default SpecialMenuCard;
