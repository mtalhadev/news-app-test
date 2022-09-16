import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useTranslation } from "react-i18next";
import Feather from 'react-native-vector-icons/Feather'

import { fonts } from '../../theme'
import Row from '../Row';
import { useTheme } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Searchbar = ({onChangeText,text}) => {
    const {t, i18n} = useTranslation()
    const {colors} = useTheme()
    const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container,{borderColor: colors.gray}]}>
        <Row>
            <TextInput
                placeholder={t("common:search")}
                onChangeText = {onChangeText}
                placeholderTextColor = {colors.gray}
                style={[styles.input,{color: colors.gray}]}
                value = {text}
            />
            <Feather name='search' color={colors.gray} />
        </Row>
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingVertical: 5,
        height: 40,
        
    },
    input:{
        fontFamily: fonts.medium, 
        fontSize: 12, 
        flex: 1,
        paddingTop: 0,
        paddingBottom: 0,
    }
})