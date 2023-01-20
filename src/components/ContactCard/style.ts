import {StyleSheet} from 'react-native';
import {CARD_HEIGHT} from '../../util/itemSizes';

const st = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexOne: {flex: 1},
  topHalf: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    backfaceVisibility: 'hidden',
    perspective: -1000,
    backgroundColor: 'white',
  },
  bottomHalf: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    padding: 16,
    backfaceVisibility: 'hidden',
    perspective: 1000,
    backgroundColor: 'white',
  },
});

export default st;
