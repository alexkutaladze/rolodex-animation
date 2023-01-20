import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CARD_HEIGHT, CARD_WIDTH} from '../../util/itemSizes';

interface BackgroundCardProps {
  top: React.ReactNode;
  bottom: React.ReactNode;
}

const BackgroundCard = ({top, bottom}: BackgroundCardProps) => {
  return (
    <View style={styles.container}>
      {top}
      {bottom}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
});

export default BackgroundCard;
