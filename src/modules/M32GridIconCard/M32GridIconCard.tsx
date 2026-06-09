import React from 'react';
import './M32GridIconCard.css';

interface CardItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

interface M32GridIconCardProps {
  title: string;
  body: string;
  cards: CardItem[];
}

export const M32GridIconCard = ({ title, body, cards }: M32GridIconCardProps) => (
  <div className="m32">
    <div className="m32__content">
      <div className="m32__header">
        <div className="m32__header-left"><p>{title}</p></div>
        <div className="m32__header-right"><p>{body}</p></div>
      </div>
      <div className="m32__cards">
        {cards.map((card, i) => (
          <div className="m32__card" key={i}>
            <div className="m32__card-icon">{card.icon}</div>
            <div className="m32__card-bottom">
              <p className="m32__card-title">{card.title}</p>
              <p className="m32__card-subtitle">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
