import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme } from '@react-navigation/native';

const Splash = ({navigation}) => {
  
  React.useEffect(() => {
    setTimeout(() => {
        navigation.replace("MainNavigator")
    }, 2000);
  }, [])

  const {colors,dark} = useTheme()
  
  return (
    <View style={{flex: 1, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{
        fontSize: 30,
        color: colors.white
      }}>News Application</Text>
    </View>
  )
}

export default Splash