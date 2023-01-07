import {View, Text, Button} from 'react-native';
import React from 'react';
import {ContactCard as IContactCard} from '../../util/roledexInfo';
import st from './style';

interface ContactCardProps {
  card: IContactCard;
}

const ContactCard = ({card}: ContactCardProps) => {
  return (
    <View style={st.container}>
      <View style={st.topHalf}>
        <Text>{card.title}</Text>
      </View>
      <View style={st.bottomHalf}>
        <Text>{card.label}</Text>
        {card.buttons?.map(btn => (
          <Button
            key={`button-${btn.label}`}
            title={btn.label}
            onPress={btn.action}
          />
        ))}
      </View>
    </View>
  );
};

export default ContactCard;
