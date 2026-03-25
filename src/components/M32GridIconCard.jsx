import React from "react";
import "./M32GridIconCard.css";

export function M32GridIconCard({ title, subtitle, cards = [] }) {
  return (
    <section className="m32">
      <div className="m32__content">
        <div className="m32__header">
          <h2 className="m32__header-title">{title}</h2>
          <p className="m32__header-subtitle">{subtitle}</p>
        </div>
        <div className="m32__cards">
          {cards.map((card, index) => (
            <div className="m32__card" key={index}>
              <div className="m32__card-icon">
                <img src={card.icon} alt={card.label} />
              </div>
              <div className="m32__card-bottom">
                <p className="m32__card-label">{card.label}</p>
                <p className="m32__card-description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default M32GridIconCard;
