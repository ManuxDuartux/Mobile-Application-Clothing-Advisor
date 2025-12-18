import React from'react';
import  { Text, Image, View, ScrollView, StyleSheet, TouchableOpacity, TextInput} from "react-native"; 
import stylesaboutcontacts from '../Styles/stylesaboutcontacts';
import stylesaccountdetails from '../Styles/stylesaccountdetails';

const AboutContactsNoUser=({navigation})=> {
  return (
    <View style ={{ backgroundColor: '#FFF4C2', flex: 1 }} > 
    
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

    <Image style={stylesaboutcontacts.style_instagram_icon} source={require ('../assets/instagramicon.jpg')}>
    </Image>
    <Image style={stylesaboutcontacts.style_facebook_icon} source={require ('../assets/facebookicon.jpg')}>
    </Image>
    <Image style={stylesaboutcontacts.style_twitter_icon} source={require ('../assets/twittericon.jpg')}>
    </Image>
    <Image style={stylesaboutcontacts.style_tiktok_icon} source={require ('../assets/tiktokicon.jpg')}>
    </Image>
    <Image style={stylesaboutcontacts.style_picture_icon} source = {require('../assets/pictureicon.jpg')}>
    </Image>
    <View style = {stylesaccountdetails.style_line}>
    </View>
    <View style = {stylesaccountdetails.style_line_2}>
    </View>
    <View style = {stylesaboutcontacts.style_line_3}>
    </View>
    <View style={stylesaboutcontacts.style_OUR_MISSION}>
        <Text style={stylesaboutcontacts.style_OUR_MISSION}>
          OUR MISSION
        </Text>
    </View>
    <View style={stylesaboutcontacts.style_About}>
        <Text style={stylesaboutcontacts.style_About}>
          About
        </Text>
    </View>
        <View style={stylesaboutcontacts.style_texto_OUR_MISSION}>
          <Text style={stylesaboutcontacts.style_texto_OUR_MISSION}>
            TRENDTROVE exists for the love of fashion outfits. 
            We believe in empowering individuality.
            Our mission is to be the global platform for Clothing advisor.
          </Text>
        </View>
        <View style={stylesaboutcontacts.style_texto_ABOUT}>
          <Text style={stylesaboutcontacts.style_texto_ABOUT}>
            Iconics Outifs of the Day according to the Season Solutions of our Daily Brands
          </Text>
        </View>

      <View style={stylesaboutcontacts.style_CONTACTS_US}>
        <Text style={stylesaboutcontacts.style_CONTACTS_US}>
          CONTACTS US
        </Text>
      </View>
      <View style={stylesaboutcontacts.style_Contact_Mail}>
        <Text style={stylesaboutcontacts.style_Contact_Mail}>
          Fax:278523960   Mail: trendtrove.dressproperty@gmail.com
        </Text>
       </View>
       <View style={stylesaboutcontacts.style_FOLLOW_US}>
        <Text style={stylesaboutcontacts.style_FOLLOW_US}>
          FOLLOW US
        </Text>
      </View>
    </View>
  );
}
export default AboutContactsNoUser;
