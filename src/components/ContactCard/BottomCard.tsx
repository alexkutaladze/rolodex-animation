import React from 'react';
import {View, Text, Button} from 'react-native';
import {ContactCard} from '../../util/roledexInfo';

import st from './style';

interface BottomCardProps {
  card: ContactCard;
}

const BottomCard = ({card}: BottomCardProps) => {
  return (
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
  );
};

export default BottomCard;
