import React from "react";
import { CalendarBlank, Phone, WhatsappLogo, Envelope } from "@phosphor-icons/react";
import { M22ContentText } from "./M22ContentText";

export default {
  title: "Modules/M22ContentText",
  component: M22ContentText,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

const defaultProps = {
  title: "Información adicional",
  body: "Los alumnos que accedieran por Homologación de Bachiller o por Credencial UE se regirán por los mismos criterios que el resto de los estudiantes y deberán aportar la documentación correspondiente a su sistema de acceso legal a la universidad:",
  items: [
    { icon: <CalendarBlank size={20} />, label: "Horario en junio, julio y septiembre", value: "De 9:30 a 18:00 de lunes a jueves. Viernes de 9:00 h. a 14:30 h." },
    { icon: <Phone size={20} />, label: "Teléfono", value: "(+34) 627 525 835", valueIsLink: true },
    { icon: <WhatsappLogo size={20} />, label: "Whatsapp", value: <><span style={{ color: "var(--texts-primary-1)" }}>681 185 748</span><span style={{ color: "#c0c6cc" }}> |</span><span style={{ color: "var(--texts-primary-1)" }}> 650 334 362</span></> },
    { icon: <Envelope size={20} />, label: "Email", value: "orientacion@ufv.es", valueIsLink: true },
  ],
  notice: "Estos precios no incluyen el coste de la reserva de plaza, que será 695€. Esta cantidad solo será reembolsada en caso de que no dispongas de acceso legal a la universidad.",
  buttonText: "Más información",
};

export const Default = {
  render: () => <M22ContentText {...defaultProps} theme="base" />,
};

export const BW = {
  name: "B/W",
  render: () => <M22ContentText {...defaultProps} theme="bw" />,
};
