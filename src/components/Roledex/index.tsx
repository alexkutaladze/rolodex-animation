import React, {useRef} from 'react';
import {Animated} from 'react-native';
import {CARD_HEIGHT} from '../../util/itemSizes';

import {RoledexCards} from '../../util/roledexInfo';
import ContactCard from '../ContactCard';
import st from './style';

const Roledex = () => {
  const scrollY = useRef(new Animated.Value(0));

  return (
    <Animated.FlatList
      data={RoledexCards.reverse()}
      renderItem={({item, index}) => {
        const inputRange = [
          index * CARD_HEIGHT,
          (index + 1) * CARD_HEIGHT,
          (index + 2) * CARD_HEIGHT,
        ];

        const scale = scrollY.current.interpolate({
          inputRange,
          outputRange: [1, 1.05, 1.1],
        });
        return (
          <Animated.View key={item.id} style={{transform: [{scale}]}}>
            <ContactCard card={item} />
          </Animated.View>
        );
      }}
      showsVerticalScrollIndicator={false}
      bounces={false}
      scrollEventThrottle={16}
      snapToInterval={CARD_HEIGHT}
      onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
      style={st.flatList}
    />
  );
};

export default Roledex;
