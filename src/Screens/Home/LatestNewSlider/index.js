import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Row from '../../../components/Row'
import Carousel from 'react-native-reanimated-carousel';
import { colors, constants, fonts, globalStyle } from '../../../theme';


const LatestNewSlider = ({news}) => {
  return (
    <View style={{marginVertical: 10}}>
      <Row style={{marginHorizontal: 10,marginBottom: 5}}>
        <Text style={styles.h}>Latest News</Text>
        <Pressable>
            <Text style={globalStyle.link}>See All</Text>
        </Pressable>
      </Row>
      <View style={{}}>
        <Carousel
            // vertical: false,
            autoPlay
            width =  {constants.SCREEN_WIDTH * 0.85}
            height = {constants.SCREEN_WIDTH / 2.5}
            vertical = {false}
            style={{ width: '100%' }}
            autoPlayInterval = {5000}
            data={news}
            // onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={({ item }) => (
                <View style={{ flex: 1, marginLeft: '2.5%', borderRadius: 10, overflow: 'hidden'}}>
                    <View style={globalStyle.layer}/>
                    <Image source={{uri: item.urlToImage}} style={{width: '100%', height: "100%", position: 'absolute'}} />
                    <View  style={{flex: 1, padding: 10, zIndex: 100}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={[globalStyle.title,{fontFamily:fonts.bold}]}>{item?.author? `By ${item?.author}`: ""}</Text>
                            <Text style={globalStyle.small12}>{item.title}</Text>
                        </View>
                        <Text style={globalStyle.small12}>{"I’m going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money."}</Text>
                    </View>
                </View>
            )}
        />
      </View>
    </View>
  )
}

export default LatestNewSlider

const styles = StyleSheet.create({
    h: {
        fontSize: 16,
        fontFamily: fonts.bold,
        color: colors.text,
    },

})