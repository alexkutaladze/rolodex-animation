import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {RoledexCards} from '../../util/roledexInfo';
import BackgroundCard from '../BackgroundCard';
import ContactCard from '../ContactCard';
import BottomCard from '../ContactCard/BottomCard';
import TopCard from '../ContactCard/TopCard';

import st from './style';

const Roledex = () => {
  const [index, setIndex] = useState(1);

  const prev = RoledexCards[index - 1];
  const current = RoledexCards[index];
  const next = RoledexCards[index + 1];

  const onFlip = useCallback((isNext: boolean) => {
    setIndex(idx =>
      isNext
        ? Math.min(RoledexCards.length - 1, idx + 1)
        : Math.max(0, idx - 1),
    );
  }, []);

  console.log({index});

  return (
    <SafeAreaView style={st.container}>
      <View style={st.roledexWrapper}>
        <BackgroundCard
          top={<TopCard card={!prev ? current : prev} />}
          bottom={<BottomCard card={!next ? current : next} />}
        />
        {!prev ? (
          <View style={st.container} />
        ) : (
          <ContactCard
            front={<TopCard card={current} />}
            back={<BottomCard card={prev} />}
            onFlip={onFlip}
          />
        )}
        {!next ? (
          <View style={st.container} />
        ) : (
          <ContactCard
            front={<BottomCard card={current} />}
            back={<TopCard card={next} />}
            onFlip={onFlip}
            bottom
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Roledex;
