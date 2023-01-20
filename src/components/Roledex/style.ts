import {StyleSheet} from 'react-native';
import {CARD_HEIGHT, CARD_WIDTH} from '../../util/itemSizes';

const st = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roledexWrapper: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
  },
});

export default st;
