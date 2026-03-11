import CardHighlighted from '../components/CardHighlighted';
export default {
  title: 'UI Components/CardHighlighted',
  component: CardHighlighted,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '421px' }}>
        <Story />
      </div>
    ),
  ],
};
export const Default = {
  args: {
    label: 'LOREM IPSUM DOLOR SIT',
    price: '00.000',
    currency: '€',
    subtitle: 'Label',
    items: ['Item list', 'Item list', 'Item list', 'Item list'],
    buttonText: 'Button',
    bgColor: 'var(--fills-s1-3)',
  },
};
