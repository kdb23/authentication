/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @format strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import SignInScreen from './src/SignInScreen';


const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
});

export default App;
