import React from "react";

function SpecialMenuCard({ src, alt, name, price, description }) {
  return (
    <div className="card">
      <img className="card-image" src={src} alt={alt} />
      <div className="card-body">
        <div className="card-title-div">
          <h4 className="heading card-title">{name}</h4>
          <p className="paragraph price-card">${price}</p>
        </div>
        <p className="paragraph cart-description">{description}</p>
        <div>
          <a className="card-link">Order a Delivery</a>
          <img src="./assets/delivery_bike.svg" />
        </div>
      </div>
    </div>
  );
}

export default SpecialMenuCard;
