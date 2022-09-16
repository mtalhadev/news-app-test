import { View, Text, useColorScheme, Linking } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer,DefaultTheme,DarkTheme } from '@react-navigation/native';
import Navigation from './src/Navigation'
import './src/localization/DCSLocalize';
import { colors } from './src/theme';
import linking from './src/Navigation/linking';

export const ThemeContext = React.createContext();

export default function App() {
  const scheme = useColorScheme();
  const [theme, setTheme] = React.useState(scheme);
  const themeData = { theme, setTheme };



  return (
    <ThemeContext.Provider value={themeData}>
      <SafeAreaProvider>
        <NavigationContainer 
          linking={linking}
          theme={theme === "dark"?{
            dark: DarkTheme.dark,
            colors:{
              ...DarkTheme.colors,
              ...colors.darkTheme
            }
          }:
          {
            dark: DefaultTheme.dark,
            colors:{
              ...DefaultTheme.colors,
              ...colors.lightTheme
            }
          }
          }
        >
          <Navigation/>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeContext.Provider>
  )
}