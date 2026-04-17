import React from "react";

export function M38Numbers({ title, cards = [], theme = "base" }) {
  return (
    <section className={`m38 m38--${theme}`}>
      <h2 className="m38__title">{title}</h2>
      <div className="m38__cards">
        {cards.map((card, index) => (
          <div className="m38__card" key={index}>
            <div className="m38__card-icon">{card.icon}</div>
            <div className="m38__card-label">{card.label}</div>
            <div className="m38__card-value">{card.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default M38Numbers;
