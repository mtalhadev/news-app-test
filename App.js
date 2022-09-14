import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation'
import './src/localization/DCSLocalize';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}