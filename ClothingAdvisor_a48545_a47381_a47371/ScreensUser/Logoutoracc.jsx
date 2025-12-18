import React from'react';
import { Text , Image , View,TouchableOpacity}  from 'react-native';
import stylesLogOutorAcc from '../Styles/stylesLogOutorAcc';

const Logoutoracc=({navigation})=> {
  return (
    <View style ={{ backgroundColor: '#FFF4C2', flex: 1 }} > 
        <View>
     
     <TouchableOpacity onPress={() => navigation.navigate("Profile")} >
     <Image style = {styles.style_profile_icon } source = {require('../assets/profileicon.jpg')}>
   </Image></TouchableOpacity>
   
   <TouchableOpacity onPress={() => navigation.navigate("Favorites")}>
   <Image style = {styles.style_favorites_icon } source = {require('../assets/favoritesicon.jpg')}>
   </Image></TouchableOpacity>
   
   <Image style = {styles.style_logo } source = {require('../assets/logo.png')}>
   </Image>
  
   <TouchableOpacity onPress={() => navigation.navigate("LoggedInSearch")} >
   <Image style = {styles.style_search_icon } source = {require('../assets/searchicon.jpg')}>
   </Image></TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate("UserDailyOutfit")}>
   <Image style = {styles.style_homepage_icon } source = {require('../assets/homepageicon.jpg')}> 
   </Image></TouchableOpacity>


     <View style={styles.style_Line_1}></View>
     <View style={styles.style_Line_2}></View>
</View>
  <Image style = {stylesLogOutorAcc.style_logo} source = {require ('../assets/logo.png')}>
  </Image>
 
        <View style={stylesLogOutorAcc.style_Or}>
          <Text style={stylesLogOutorAcc.style_Or}>
             OR
          </Text>
        </View>
  <TouchableOpacity onPress={() => navigation.navigate("LoggInOrRegister")} style={stylesLogOutorAcc.buttonLogOut}>
            <Text style={stylesLogOutorAcc.style_Log_Out}>
              Log Out
            </Text>
  </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("AccountDetails")} style={stylesLogOutorAcc.buttonAccountDetails}>
          <Text style={stylesLogOutorAcc.style_Account_Details}>
            Account Details
          </Text>
    </TouchableOpacity>
  </View>
  )
}
export default Logoutoracc;