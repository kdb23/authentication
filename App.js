/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AuthProvider } from './components/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import AppNav from './components/AppNav'


function App() {
  return (
    <AuthProvider >
      <NavigationContainer>
        <AppNav />
          <Text>Token Fun</Text>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
