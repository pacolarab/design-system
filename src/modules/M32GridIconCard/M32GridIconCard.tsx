import React from "react";
import "./M32GridIconCard.css";

interface CardItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

interface M32GridIconCardProps {
  title: string;
  subtitle: string;
  cards: CardItem[];
}

export function M32GridIconCard({ title, subtitle, cards }: M32GridIconCardProps) {
  return (
    <section className="m32">
      <div className="m32__header">
        <h2 className="m32__title">{title}</h2>
        <p className="m32__subtitle">{subtitle}</p>
      </div>

      <div className="m32__grid">
        {cards.map((card, index) => (
          <article className="m32__card" key={index}>
            <div className="m32__card-icon">{card.icon}</div>
            <div className="m32__card-bottom">
              <p className="m32__card-title">{card.title}</p>
              <p className="m32__card-subtitle">{card.subtitle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default M32GridIconCard;
