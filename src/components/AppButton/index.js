import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'

const AppButton = ({title,containerStyle = {},btnText={},onPress,active = true}) => {
  return (
    <Pressable 
        style={[styles.container,active?styles.active:{},containerStyle]} 
        onPress = {onPress}
    >
      <Text style= {[styles.btnText,{color: active?colors.white: colors.black},btnText]}>{title}</Text>
    </Pressable>
  )
}

export default AppButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 100,
        borderColor: colors.black,
        paddingHorizontal: 10,
        minHeight: 45
    },
    active: {
        borderWidth: 0,
        backgroundColor: colors.primary,
    },
    btnText: {
        color: colors.black,
        fontSize: 16,
        fontFamily: fonts.medium
    }
})