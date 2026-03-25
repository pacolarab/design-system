import React from "react";
import { M32GridIconCard } from "../components/M32GridIconCard";

const iconGrados = "http://localhost:3845/assets/f4f020e263691d95f5db5c06b3eff02c6e64b9f2.svg";
const iconPostgrados = "http://localhost:3845/assets/fba86eb8849291520bd34c8f0f2ff175fae5cbc4.svg";
const iconDoctorados = "http://localhost:3845/assets/c82fef45ad9755385b6baa382178451e91451cdf.svg";
const iconFP = "http://localhost:3845/assets/ff54b49979721f5a76c98c4b316eb9255a565dcf.svg";
const iconEjecutiva = "http://localhost:3845/assets/848813460989a1e9845be8ead4481e0e99bca777.svg";
const iconOtras = "http://localhost:3845/assets/3fe5e6a4a77f9d44a72671253a6104ce58f6942e.svg";

export default {
  title: "Modules/M32GridIconCard",
  component: M32GridIconCard,
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
    title: "Una oferta académica innovadora para una vida con impacto",
    subtitle:
      "Una formación superior basada en la excelencia que impulsa tu desarrollo personal y profesional.",
    cards: [
      {
        icon: iconGrados,
        label: "Grados",
        description:
          "La experiencia universitaria completa, donde aprender y vivir la universidad van de la mano.",
      },
      {
        icon: iconPostgrados,
        label: "Postgrados",
        description:
          "Programas para enriquecer tu formación y descubrir nuevas oportunidades.",
      },
      {
        icon: iconDoctorados,
        label: "Doctorados",
        description:
          "La investigación para la búsqueda compartida del bien y del sentido.",
      },
      {
        icon: iconFP,
        label: "Formación profesional",
        description: "El enfoque más práctico.",
      },
      {
        icon: iconEjecutiva,
        label: "Educación ejecutiva",
        description:
          "Formamos líderes y profesionales capaces de transformar organizaciones y personas.",
      },
      {
        icon: iconOtras,
        label: "Otras formaciones",
        description: "Cursos y programas de expertos.",
      },
    ],
  },
};
