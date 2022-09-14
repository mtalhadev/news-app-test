import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useTranslation } from "react-i18next";
import Feather from 'react-native-vector-icons/Feather'

import { colors, fonts } from '../../theme'
import Row from '../Row';

const Searchbar = ({onChangeText}) => {
    const {t, i18n} = useTranslation()
  return (
    <View style={styles.container}>
        <Row>
            <TextInput
                placeholder={t("common:search")}
                onChangeText = {onChangeText}
                style={styles.input}
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
        borderColor: colors.lightGray,
        paddingHorizontal: 20,
        borderRadius: 100,
        justifyContent: 'center',
        paddingVertical: 10
    },
    input:{
        fontFamily: fonts.medium, 
        fontSize: 12, 
        color: colors.gray,
        flex: 1
    }
})