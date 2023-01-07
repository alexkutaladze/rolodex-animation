import {Alert} from 'react-native';

type ContactCardButton = {
  label: string;
  action: () => void;
};

type ContactCard = {
  id: string;
  title: string;
  label?: string;
  buttons?: ContactCardButton[];
};

const RoledexCards: ContactCard[] = [
  {
    id: 'contact-card-1',
    title: 'Card 1',
    label: 'Contact us for more information',
    buttons: [
      {
        label: 'Press me',
        action: () => Alert.alert('Hello from Card 1'),
      },
    ],
  },
  {
    id: 'contact-card-2',
    title: 'Card 2',
    label: 'Contact card for card 2',
    buttons: [
      {
        label: 'Press me',
        action: () => Alert.alert('გამარჯობა'),
      },
    ],
  },
  {
    id: 'contact-card-3',
    title: 'Card 3',
    label: 'Lorem ipsum',
  },
];

export {RoledexCards};
export type {ContactCardButton, ContactCard};
