import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import globalStyle from '../../theme/globalStyle'

/**
 * Components
 */
import AppButton from '../../components/AppButton'
import Searchbar from '../../components/Searchbar'
import Row from '../../components/Row'
import { colors, constants } from '../../theme'
import LatestNewSlider from './LatestNewSlider'
import Categoties from './Categories'
import { getBrekingNews, getNews } from '../../api'


const Home = () => {
  const [activeCat, setActiveCat] = useState(constants.categories[0])
  const [news, setNews] = useState([]);
  const [brekingNews, setBrekingNews] = useState([]);

  React.useEffect(() => {
    getNewsHandler();
    getBrekingNewsHandler()
  }, [])
  
  const getNewsHandler = async()=>{
    try {
      let res = await getNews()
      res = JSON.parse(res)
      if(res?.totalResults > 0){
        setNews(res.articles)
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  
  const getBrekingNewsHandler = async()=>{
    try {
      let res = await getBrekingNews()
      res = JSON.parse(res)
      if(res?.totalResults > 0){
        setBrekingNews(res.articles)
      }
      
    } catch (error) {
      console.log(error,"AAA")
    }
  }

  return (
    <SafeAreaView style={globalStyle.container} edges = {["top"]}>
      <Row>
        <Searchbar/>
        <TouchableOpacity style={styles.bellBg}>
          <MaterialCommunityIcons name='bell' color={colors.white}/>
        </TouchableOpacity>
      </Row>
      <LatestNewSlider
        news = {brekingNews}
      />
      <View style={{flex: 1}}>
        <FlatList
          // stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator = {false}
          ListHeaderComponent={()=>(
            <Categoties activeCat = {activeCat} onPress= {(cat)=>setActiveCat(cat)}/>
          )}
          data={news}
          keyExtractor = {(item, index) => `item-${index}`}
          renderItem = {({item})=>{
            return(
              <View style={{ height: 120, borderRadius: 10, overflow: 'hidden', marginBottom: 10}}>
                    <View style={globalStyle.layer}/>
                    <Image source={{uri: item.urlToImage}} style={{width: '100%', height: "100%", position: 'absolute'}} />
                    <View  style={{flex: 1, padding: 10, zIndex: 100}}>
                        <View style={{flex: 1, justifyContent: 'flex-start'}}>
                            <Text style={globalStyle.title}>{item.title}</Text>
                        </View>
                        <Row>
                          <Text style={globalStyle.small12}>{item.author}</Text>
                          <Text style={globalStyle.small12}>{item.publishedAt}</Text>
                        </Row>
                    </View>
                </View>
            )
          }}
        />
      </View>
      {/* <AppButton title={"APP BUTTON"}/> */}
    </SafeAreaView>
  )
}

export default Home



const styles = StyleSheet.create({
  bellBg: {
    backgroundColor: colors.primary,
    height: 30, width: 30, alignItems: 'center', justifyContent: 'center',
    borderRadius: 100,
    marginStart: 15
  }
})