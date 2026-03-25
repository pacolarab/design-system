import M45TabContentB from "../components/M45TabContentB";

export default {
  title: "Modules/M45TabContentB",
  component: M45TabContentB,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title:      { control: "text" },
    body:       { control: "text" },
    buttonText: { control: "text" },
    tabs:       { control: "object" },
    activeTab:  { control: { type: "number", min: 0 } },
    items:      { control: "object" },
    links:      { control: "object" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  name: "Default",
  args: {
    title: "Descubre cómo se transforma tu vocación en conocimiento",
    body: "Priorizamos la centralidad de la persona, la formación orientada a la búsqueda de la verdad, el bien y la belleza.",
    buttonText: "Ver más",
    tabs: [
      "Filosofía",
      "Teología",
      "Derecho",
      "Medicina",
      "Arte",
      "Ingeniería",
      "Humanidades",
    ],
    activeTab: 0,
    items: [
      { label: "Grado en Filosofía" },
      { label: "Grado en Teología" },
      { label: "Grado en Derecho Canónico" },
      { label: "Licenciatura en Medicina" },
      { label: "Máster en Arte Sacro" },
      { label: "Grado en Ingeniería" },
      { label: "Doble Grado Humanidades" },
      { label: "Máster en Filosofía Medieval" },
    ],
    links: [
      { label: "Descargar guía de grados" },
      { label: "Ver todos los programas" },
    ],
  },
};
