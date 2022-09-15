import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, globalStyle } from '../../theme'

const Favorite = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.primary}}>
      <Text style={globalStyle.title}>Coming soon...</Text>
    </View>
  )
}

export default Favorite

const styles = StyleSheet.create({})