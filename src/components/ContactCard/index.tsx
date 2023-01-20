import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {CARD_HEIGHT} from '../../util/itemSizes';

import st from './style';

const backPerspective = {perspective: -1000};
const frontPerspective = {perspective: 1000};

interface ContactCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  bottom?: boolean;
  onFlip: (next: boolean) => void;
}

const ContactCard = ({
  front,
  back,
  bottom = false,
  onFlip,
}: ContactCardProps) => {
  const offsetY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate(e => {
      offsetY.value = e.translationY;
    })
    .onEnd(() => {
      if (Math.abs(offsetY.value) > CARD_HEIGHT / 2) {
        offsetY.value = withTiming(
          bottom ? -CARD_HEIGHT : CARD_HEIGHT,
          {},
          () => {
            runOnJS(onFlip)(bottom);
          },
        );
      } else {
        offsetY.value = withTiming(0);
      }
    });

  const coef = bottom ? -1 : 1;

  const bottomRStyle = useAnimatedStyle(() => {
    const topInterpolation = interpolate(
      offsetY.value,
      [0, CARD_HEIGHT],
      [0, -180],
      Extrapolate.CLAMP,
    );

    const bottomInterpolation = interpolate(
      offsetY.value,
      [-CARD_HEIGHT, 0],
      [180, 0],
      Extrapolate.CLAMP,
    );

    const rotateX = `${bottom ? bottomInterpolation : topInterpolation}deg`;

    return {
      transform: [
        backPerspective,
        {rotateY: '180deg'},
        {translateY: (coef * CARD_HEIGHT) / 4},
        {
          rotateX,
        },
        {translateY: (coef * -CARD_HEIGHT) / 4},
        {rotateZ: '180deg'},
      ],
    };
  });

  const topRStyle = useAnimatedStyle(() => {
    const topInterpolation = interpolate(
      offsetY.value,
      [0, CARD_HEIGHT],
      [0, -180],
      Extrapolate.CLAMP,
    );

    const bottomInterpolation = interpolate(
      offsetY.value,
      [-CARD_HEIGHT, 0],
      [180, 0],
      Extrapolate.CLAMP,
    );

    const rotateX = `${bottom ? bottomInterpolation : topInterpolation}deg`;

    return {
      backfaceVisibility: 'hidden',
      transform: [
        frontPerspective,
        {translateY: (coef * CARD_HEIGHT) / 4},
        {rotateX},
        {translateY: (coef * -CARD_HEIGHT) / 4},
      ],
    };
  });

  return (
    <GestureDetector gesture={panGesture}>
      <View style={st.container}>
        <Animated.View style={[StyleSheet.absoluteFill, bottomRStyle]}>
          {back}
        </Animated.View>
        <Animated.View style={[StyleSheet.absoluteFill, topRStyle]}>
          {front}
        </Animated.View>
      </View>
    </GestureDetector>
  );
};

export default ContactCard;
