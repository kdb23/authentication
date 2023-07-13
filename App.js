/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @format strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import CustomInput from './src/components/CustomInput';


const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen />
      <CustomInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
});

export default App;
