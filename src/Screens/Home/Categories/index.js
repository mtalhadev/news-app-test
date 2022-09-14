import { Pressable, ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'
import { colors, constants, fonts } from '../../../theme'

const Categoties = ({activeCat, onPress}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator = {false} style={{marginVertical: 10}}>
        {
            constants.categories.map(cat=>(
                <Pressable style = {[styles.tab,{backgroundColor: activeCat === cat?colors.primary:"transparent"}]} onPress= {()=>onPress(cat)}>
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
        borderColor: colors.lightGray        
    },
    text: {
        fontSize: 14,
        fontFamily: fonts.regular,
        color: colors.text
    }
})