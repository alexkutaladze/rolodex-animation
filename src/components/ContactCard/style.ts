import {StyleSheet} from 'react-native';
import {CARD_HEIGHT, CARD_WIDTH} from '../../util/itemSizes';

const st = StyleSheet.create({
  container: {
    position: 'absolute',
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  topHalf: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
  },
  bottomHalf: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    padding: 16,
  },
});

export default st;
