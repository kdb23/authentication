/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AuthProvider } from './components/AuthContext';
import AppNav from './components/AppNav'
import { DateProvider } from './components/DateContext';


function App() {
  return (
    <DateProvider>
    <AuthProvider >
        <AppNav />
    </AuthProvider>
    </DateProvider>
  );
}

export default App;
