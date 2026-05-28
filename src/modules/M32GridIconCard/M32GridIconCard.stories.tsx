import React from "react";
import { M32GridIconCard } from "./M32GridIconCard";

export default {
  title: "Modules/M32GridIconCard",
  component: M32GridIconCard,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

const GraduationCap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
    <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
  </svg>
);

const BookOpenText = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    <path d="M6 8h2M6 12h2M16 8h2M16 12h2" />
  </svg>
);

const Certificate = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <path d="M9 9h6M9 12h4" />
  </svg>
);

const CraneTower = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 21V5L3 9" />
    <path d="M11 5h10l-3 4" />
    <path d="M11 9h6" />
    <path d="M14 9v6" />
    <path d="M11 21h8" />
  </svg>
);

const Briefcase = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="M12 12v2M2 12h20" />
  </svg>
);

const Book = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const defaultProps = {
  title: "Una oferta académica innovadora para una vida con impacto",
  subtitle: "Una formación superior basada en la excelencia que impulsa tu desarrollo personal y profesional.",
  cards: [
    {
      icon: <GraduationCap />,
      title: "Grados",
      subtitle: "La experiencia universitaria completa, donde aprender y vivir la universidad van de la mano.",
    },
    {
      icon: <BookOpenText />,
      title: "Postgrados",
      subtitle: "Programas para enriquecer tu formación y descubrir nuevas oportunidades.",
    },
    {
      icon: <Certificate />,
      title: "Doctorados",
      subtitle: "La investigación para la búsqueda compartida del bien y del sentido.",
    },
    {
      icon: <CraneTower />,
      title: "Formación profesional",
      subtitle: "El enfoque más práctico.",
    },
    {
      icon: <Briefcase />,
      title: "Educación ejecutiva",
      subtitle: "Formamos líderes y profesionales capaces de transformar organizaciones y personas.",
    },
    {
      icon: <Book />,
      title: "Otras formaciones",
      subtitle: "Cursos y programas de expertos.",
    },
  ],
};

export const Default = {
  render: () => <M32GridIconCard {...defaultProps} />,
};
