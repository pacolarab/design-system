import M21B from "./M21B";

const IMAGES = [
  "https://picsum.photos/seed/a/533/280",
  "https://picsum.photos/seed/b/260/180",
  "https://picsum.photos/seed/c/260/180",
];

export default {
  title: "Components/M21B",
  component: M21B,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title:      { control: "text" },
    paragraph:  { control: "text" },
    statNumber: { control: "text" },
    statLabel:  { control: "text" },
    ctaLabel:   { control: "text" },
  },
  args: {
    title:      "Espacios diseñados para formar a los profesionales del futuro",
    paragraph:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas dolor vel facilisis egestas. Nulla nec varius ante, vitae imperdiet urna.",
    statNumber: "8.4/10",
    statLabel:  "En experiencia internacional de nuestros alumnos",
    ctaLabel:   "Saber más",
    images:     IMAGES,
  },
};

export const Default = {};
