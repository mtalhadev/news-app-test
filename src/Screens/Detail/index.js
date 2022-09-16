import { Image, Linking, Platform, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import moment from 'moment'
import { constants, globalStyle } from '../../theme'

import { BlurView, VibrancyView } from "@react-native-community/blur";
import AppButton from '../../components/AppButton';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

const Detail = ({route,navigation}) => {
    const item = route?.params?.item  
    const insets = useSafeAreaInsets();
    const {colors} = useTheme()

    return (
        <View style={{flex: 1}}>
            <StatusBar translucent backgroundColor={"transparent"}/>
            <Pressable style={{position: 'absolute',zIndex: 100, top: Platform.OS === "ios"? insets.top: StatusBar.currentHeight + 10, left: 20, backgroundColor: "rgba(255,255,255,.3)", height: 30, width: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 100}} onPress = {()=>navigation.goBack()}>
                <Ionicons name='arrow-back' color={colors.black} size={20} />
            </Pressable>
            
            <View style={{ borderRadius: 10, overflow: 'hidden', height: constants.SCREEN_WIDTH / 1.5}}>
                <Image source={{uri: item?.urlToImage}} style={{width: '100%', height: "100%",}} />
            </View>
            <View style={{flex: 1,zIndex: 10}}>
                <View style={styles.bluredView}>
                    <View
                        // blurType="dark"
                        // blurAmount={5}
                        // reducedTransparencyFallbackColor="white"
                        style={{padding: 15,backgroundColor: "rgba(3,3,3,.7)"}}        
                    >
                        <Text style={[globalStyle.small12,{color: colors.white}]}>{item?.author? `By ${item?.author}`: ""}</Text>
                        <View style={{marginVertical: 5}}>
                            <Text style={[globalStyle.small12,{color: colors.white}]}>{item?.title}</Text>
                        </View>
                        <Text numberOfLines={1} style={[globalStyle.small12,{color: colors.white}]}>{
                            moment(item?.publishedAt).format(constants.DATE_FORMATE)
                        }</Text>
                    </View>
                </View>
                <View style={{flex: 1, marginTop: -30,marginHorizontal: 20}}>
                    <ScrollView>
                        <View>
                            <Text style={[globalStyle.small12,{color: colors.text, lineHeight: 18}]}>{item?.description}</Text>
                        </View>
                        <View>
                            <Text style={[globalStyle.small12,{color: colors.text,lineHeight: 18}]}>{item?.content}</Text>
                        </View>
                        <AppButton title={"Read More"}  containerStyle={{marginTop: 20}} onPress={()=>Linking.openURL(item?.url)} />
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    bluredView: {
        top: -60, width: "70%", 
        alignSelf: 'center',borderRadius: 10, overflow: 'hidden', 
        // position: 'absolute'
    }
})