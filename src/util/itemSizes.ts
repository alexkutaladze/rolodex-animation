import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const CARD_HEIGHT = (2 * height) / 3;
export const CARD_WIDTH = width * 0.8;
