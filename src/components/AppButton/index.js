import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fonts from '../../theme/fonts'
import { useTheme } from '@react-navigation/native';

const AppButton = ({title,containerStyle = {},btnText={},onPress,active = true}) => {
  const { colors } = useTheme();

  return (
    <Pressable 
        style={[
          styles.container,
          {
            backgroundColor: active?colors.primary: "transparent",
            borderColor: !active?colors.text: "transparent",
          },
          containerStyle]} 
        onPress = {onPress}
    >
      <Text style= {[styles.btnText,{color: active?colors.white: colors.text},btnText]}>{title}</Text>
    </Pressable>
  )
}

export default AppButton

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 100,
        paddingHorizontal: 10,
        minHeight: 45
    },
    btnText: {
        fontSize: 16,
        fontFamily: fonts.medium
    }
})