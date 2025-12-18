import React, { useState, useEffect, useRef } from "react";
import { Text, TextInput, Image, View, ScrollView, TouchableOpacity } from "react-native";
import styles from "../Styles/styles";
import styles2 from "../Styles/stylesSearchOutfit";


const SearchOutfit=({navigation})=> {
  
  const [search, setSearchbar] = useState("");

  return (
    <View style={styles.style_Background}>
    
    <View>
       
    <Image style = {styles.style_logo } source = {require('../assets/logo.png')}>
    </Image>
   
    <TouchableOpacity onPress={() => navigation.navigate("SearchOutfit")} >
    <Image style = {styles.style_search_icon } source = {require('../assets/searchicon.jpg')}>
    </Image></TouchableOpacity>

   <TouchableOpacity onPress={() => navigation.navigate("OutfitPage")}>
    <Image style = {styles.style_homepage_icon } source = {require('../assets/homepageicon.jpg')}> 
    </Image></TouchableOpacity>


      <View style={styles.style_Line_1}></View>
      <View style={styles.style_Line_2}></View>
</View>
 
      
      <View style={styles.style_Outfits}>
        <Text style={styles.style_Outfits}>Search Cloths</Text>
      </View>
      
      <Image style={styles2.style_pictureicon} source = {require('../assets/pictureicon.jpg')}></Image>
      <Image style={styles2.style_pictureicon_2} source = {require('../assets/pictureicon.jpg')}></Image>
      <Image style={styles2.style_pictureicon_3} source = {require('../assets/pictureicon.jpg')}></Image>

      <Image style={styles2.style_pictureicon_4} source = {require('../assets/pictureicon.jpg')}></Image>
      <Image style={styles2.style_pictureicon_5} source = {require('../assets/pictureicon.jpg')}></Image>
      <Image style={styles2.style_pictureicon_6} source = {require('../assets/pictureicon.jpg')}></Image>
      <Image style={styles2.style_pictureicon_7} source = {require('../assets/pictureicon.jpg')}></Image>
      <Image style={styles2.style_pictureicon_8} source = {require('../assets/pictureicon.jpg')}></Image>
      <Image style={styles2.style_pictureicon_9} source = {require('../assets/pictureicon.jpg')}></Image>
        <View style={styles2.style_RectangleGrande}>
          <TextInput
            style={styles2.style_search}
            placeholder="Search"
            onChangeText={text => setSearchbar(text)}
            value={search}
          /></View>

    </View>
  );
}
export default SearchOutfit;
