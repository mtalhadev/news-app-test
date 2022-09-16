import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, globalStyle } from '../../theme'
import { useTheme } from '@react-navigation/native'

const Favorite = ({route}) => {
  const {colors,dark} = useTheme()
  const newsID = route?.params?.id
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={[globalStyle.title,{color: colors.text }]}>Coming soon...</Text>
      {
        newsID?
        <Text style={[globalStyle.title,{color: colors.text }]}>News id is {newsID}</Text>
        :<></>        
      }
    </View>
  )
}

export default Favorite

const styles = StyleSheet.create({})