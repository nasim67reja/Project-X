import React, { useState } from "react";
import "./card.scss";

function Card({ imageSrc, logoSrc, title, description }) {
  const [btnIsShown, setBtnIsShown] = useState(false);
  const mouseEnterHandler = () => {
    setBtnIsShown(true);
  };
  return (
    <div className="card">
      <img src={imageSrc} alt="" />
      <div
        className="card-content"
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={() => setBtnIsShown(false)}
      >
      <div className="box">
      </div>


        <img src={logoSrc} alt="Card Logo" className="card-logo" />
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {btnIsShown && <button className="btn">View Details</button>}
      </div>
    </div>
  );
}

export default Card;
