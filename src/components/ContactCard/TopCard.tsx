import {View, Text} from 'react-native';
import React from 'react';

import st from './style';
import {ContactCard} from '../../util/roledexInfo';

interface TopCardProps {
  card: ContactCard;
}

const TopCard = ({card}: TopCardProps) => {
  return (
    <View style={st.topHalf}>
      <Text>{card.title}</Text>
    </View>
  );
};

export default TopCard;
