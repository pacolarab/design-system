import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { M32GridIconCard } from './M32GridIconCard';

const meta: Meta<typeof M32GridIconCard> = {
  title: 'Modules/M32GridIconCard',
  component: M32GridIconCard,
};
export default meta;
type Story = StoryObj<typeof M32GridIconCard>;

const defaultCards = [
  { icon: <span>🎓</span>, title: 'Grados', subtitle: 'La experiencia universitaria completa, donde aprender y vivir la universidad van de la mano.' },
  { icon: <span>📖</span>, title: 'Postgrados', subtitle: 'Programas para enriquecer tu formación y descubrir nuevas oportunidades.' },
  { icon: <span>📜</span>, title: 'Doctorados', subtitle: 'La investigación para la búsqueda compartida del bien y del sentido.' },
  { icon: <span>🏗️</span>, title: 'Formación profesional', subtitle: 'El enfoque más práctico.' },
  { icon: <span>💼</span>, title: 'Educación ejecutiva', subtitle: 'Formamos líderes y profesionales capaces de transformar organizaciones y personas.' },
  { icon: <span>📚</span>, title: 'Otras formaciones', subtitle: 'Cursos y programas de expertos.' },
];

export const Default: Story = {
  args: {
    title: 'Una oferta académica innovadora para una vida con impacto',
    body: 'Una formación superior basada en la excelencia que impulsa tu desarrollo personal y profesional.',
    cards: defaultCards,
  },
};
