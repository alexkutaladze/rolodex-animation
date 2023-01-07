import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import Roledex from './src/components/Roledex';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Roledex />
    </SafeAreaView>
  );
};

export default gestureHandlerRootHOC(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
