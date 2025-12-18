import React from "react";
import { Text, Image, View,TouchableOpacity} from "react-native";
import styles from "../Styles/styles";

 const LoggInOrResgister=({navigation})=> {
  
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


<TouchableOpacity onPress={() => navigation.navigate("RegisterPage")} ><View style={styles.style_Rectangle_36}>
<Text style={styles.style_REGISTRAR}>REGISTER</Text>
</View></TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate("LoggInPage")}><View style={styles.style_Rectangle_35}>
<View>
<Text style={styles.style_LOG_IN}>LOGIN</Text>
</View></View></TouchableOpacity>
<Text style={styles.style_OR}>OR</Text>
</View>
);
};
export default LoggInOrResgister;