import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Row from '../../../components/Row'
import Carousel from 'react-native-reanimated-carousel';
import { constants, fonts, globalStyle } from '../../../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';


const LatestNewSlider = ({news,onPress}) => {
  const {t,i18n} = useTranslation()
  const {colors} = useTheme()
  return (
    <View style={{marginVertical: 10, marginTop: 20}}>
      <Row style={{marginHorizontal: 10,marginBottom: 5}}>
        <Text style={[styles.h,{color: colors.text}]}>{t("common:latestNews")}</Text>
        <Pressable>
            <Text style={[globalStyle.link,{color: colors.primary}]}>{t("common:seeAll")}</Text>
        </Pressable>
      </Row>
      <View style={{}}>
        {
          news.length > 0?
          <Carousel
              // vertical: false,
              autoPlay
              width =  {constants.SCREEN_WIDTH * 0.85}
              height = {constants.SCREEN_WIDTH / 2.5}
              vertical = {false}
              style={{ width: '100%' }}
              autoPlayInterval = {3000}
              data={news}
              // onSnapToItem={(index) => console.log('current index:', index)}
              renderItem={({ item }) => (
                  <View style={{ flex: 1, marginLeft: '2.5%', borderRadius: 10, overflow: 'hidden'}}>
                    <TouchableOpacity style={{ height: "100%"}} activeOpacity={.9} onPress={()=>onPress(item)}>
                        <View style={globalStyle.layer}/>
                        <Image source={{uri: item.urlToImage}} style={{width: '100%', height: "100%", position: 'absolute'}} />
                        <View  style={{flex: 1, padding: 10, zIndex: 100}}>
                            <View style={{flex: 1, justifyContent: 'center'}}>
                                <Text style={[globalStyle.title,{fontFamily:fonts.bold, color: colors.white}]}>{item?.author? `By ${item?.author}`: ""}</Text>
                                <Text style={[globalStyle.small12,{color: colors.white}]}>{item.title}</Text>
                            </View>
                            <Text numberOfLines={2} style={[globalStyle.small12,{color: colors.white}]}>{item.description}</Text>
                        </View>
                    </TouchableOpacity>
                  </View>
              )}
          />
          :
          <View style = {styles.noPost}>
            <Text style={[globalStyle.title,{color: colors.text}]}>No Post Available</Text>
          </View>
        }
      </View>
    </View>
  )
}

export default LatestNewSlider

const styles = StyleSheet.create({
    h: {
        fontSize: 16,
        fontFamily: fonts.bold,
    },
    noPost: {
      width:constants.SCREEN_WIDTH * 0.85,height: constants.SCREEN_WIDTH / 2.5, alignItems: 'center', justifyContent: 'center'    
    }

})