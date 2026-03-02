import M30 from "./M30";

const PLACEHOLDER = "https://picsum.photos/1312/738";

export default {
  title: "Components/M30",
  component: M30,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    image:        { control: "text" },
    title:        { control: "text" },
    subtitle:     { control: "text" },
    ctaLabel:     { control: "text" },
    currentSlide: { control: { type: "number", min: 1, max: 10 } },
    totalSlides:  { control: { type: "number", min: 1, max: 10 } },
    progress:     { control: { type: "range",  min: 0, max: 100 } },
  },
  args: {
    image:        PLACEHOLDER,
    title:        "Espacios diseñados para formar a los profesionales del futuro",
    subtitle:     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus egestas dolor vel facilisis egestas.",
    ctaLabel:     "Saber más",
    currentSlide: 1,
    totalSlides:  5,
    progress:     20,
  },
};

export const Default = {};

export const Slide3 = {
  name: "Slide 3/5",
  args: { currentSlide: 3, progress: 60 },
};

export const LastSlide = {
  name: "Último slide",
  args: { currentSlide: 5, progress: 100 },
};

export const NoImage = {
  name: "Sin imagen",
  args: { image: undefined },
};
