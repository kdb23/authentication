/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @format strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';



const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
});

export default App;
