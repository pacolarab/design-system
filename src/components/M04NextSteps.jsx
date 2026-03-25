import React from "react";
import "./M04NextSteps.css";

const arrowRightIcon = "http://localhost:3845/assets/a24aa78286b59dc119e8c24c4286e7d2ca3b2c29.svg";

const defaultCards = [
  {
    title: "Reserva una visita",
    body: "Conoce nuestra propuesta formativa y nuestro campus.",
    bgColor: "var(--fills-p3)",
  },
  {
    title: "Inicia admisión",
    body: "Nuestros orientadores especializados te ayudarán a resolver cualquier duda que te pueda surgir.",
    bgColor: "var(--fills-s1-3)",
  },
];

export default function M04NextSteps({ cards = defaultCards }) {
  return (
    <div className="m04">
      {cards.map((card, index) => (
        <div key={index} className="m04__card" style={{ background: card.bgColor }}>
          <div className="m04__card-content">
            <p className="m04__card-title">{card.title}</p>
            <p className="m04__card-body">{card.body}</p>
          </div>
          <button className="m04__icon-btn">
            <img src={arrowRightIcon} alt="" />
          </button>
        </div>
      ))}
    </div>
  );
}
