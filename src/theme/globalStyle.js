import {StyleSheet} from 'react-native'
import colors from './colors'
import fonts from './fonts'

const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: colors.white
    },
    link: {
        fontFamily: fonts.medium,
        fontSize: 14,
        color: colors.primary,
        textDecorationLine: "underline"
    },
    layer: {
        position: 'absolute',
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(3,3,3,.6)",
        zIndex: 100
    },
    
    small12: {
        fontSize: 12,
        fontFamily: fonts.regular,
        color: colors.white
    },
    title: {
        fontSize: 12,
        fontFamily: fonts.medium,
        color: colors.white
    }
    
})

export default globalStyle