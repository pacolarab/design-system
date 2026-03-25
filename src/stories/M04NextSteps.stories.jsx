import React from "react";
import M04NextSteps from "../components/M04NextSteps";

export default {
  title: "Modules/M04NextSteps",
  component: M04NextSteps,
  decorators: [
    (Story) => (
      <div style={{ width: "100%" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {
    cards: [
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
    ],
  },
};
