import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { colors, globalStyle } from '../../theme'

const Splash = ({navigation}) => {
  
  React.useEffect(() => {
    setTimeout(() => {
        navigation.replace("app")
    }, 2000);
  }, [])
  
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