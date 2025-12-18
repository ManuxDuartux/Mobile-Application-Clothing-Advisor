import React, { useEffect, useState } from "react";
import {Text , Image , View } from "react-native";
import styles from "../Styles/styles";
import { TouchableOpacity } from "react-native";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Database/firebaseConfig";


const OutfitPage = ({ navigation, route }) => {
    const { uri, name, bodyarea, range, material, gender } = route.params;
    const [clothData, setClothData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const clothQuery = query(collection(db, 'clothes'), where('imageUrl', '==', uri));
          const clothSnapshot = await getDocs(clothQuery);
          const clothData = clothSnapshot.docs.map((doc) => doc.data());
          setClothData(clothData[0]);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, [uri]);

    return (
        
        <View style={{backgroundColor:"#FFF4C2" ,flex:1} }>
       <View>
     
     <TouchableOpacity onPress={() => navigation.navigate("Profile")} >
     <Image style = {styles.style_profile_icon } source = {require('../assets/profileicon.jpg')}>
   </Image></TouchableOpacity>
   
   <TouchableOpacity onPress={() => navigation.navigate("Favorites")}>
   <Image style = {styles.style_favorites_icon } source = {require('../assets/favoritesicon.jpg')}>
   </Image></TouchableOpacity>
   
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
            <View>
                <Text style = {styles.style_Outfit_Details}>
                    Cloth Piece Details
                </Text>
            </View>
            <Image style = {styles.style_picture_icon} source={{ uri: uri }}>
            </Image>
            <View style={styles.style_Style_}>
        <Text>
          Style: {name}
        </Text>
      </View>
      <View style={styles.style_Suited_for_}>
        <Text style={styles.style_Suited_for_}>
          Suited for: {bodyarea}
        </Text>
      </View>
      <View style={styles.style_line_3}></View>
      <View style={styles.style_Temperature_range_}>
        <Text style={styles.style_Temperature_range_}>
          Temperature range: {range}
        </Text>
      </View>
      <View style={styles.style_Materials_}>
        <Text style={styles.style_Materials_}>
          Materials: {material}
        </Text>
      </View>
      <View style={styles.style_Gender_}>
        <Text style={styles.style_Gender_}>
          Gender: {gender}
        </Text>
      </View>
        </View>
    )
}
export default OutfitPage;