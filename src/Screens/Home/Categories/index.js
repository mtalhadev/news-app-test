import { Pressable, ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'
import { constants, fonts } from '../../../theme'
import { useTheme } from '@react-navigation/native'

const Categoties = ({activeCat, onPress}) => {
    const {colors} = useTheme()
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator = {false} style={{marginVertical: 10}}>
        {
            constants.categories.map(cat=>(
                <Pressable key={cat} style = {[styles.tab,{backgroundColor: activeCat === cat?colors.primary:"transparent", borderColor: activeCat === cat?colors.primary:colors.gray }]} onPress= {()=>onPress(cat)}>
                    <Text style={[styles.text,{color: activeCat === cat?colors.white:colors.text}]}>{cat}</Text>
                </Pressable>
            ))
        }
    </ScrollView>
  )
}

export default Categoties

const styles = StyleSheet.create({
    tab:{
        marginEnd: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 100,       
    },
    text: {
        fontSize: 14,
        fontFamily: fonts.regular,
    }
})