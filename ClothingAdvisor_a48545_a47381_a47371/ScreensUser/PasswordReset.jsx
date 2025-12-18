import React, { useState, useEffect, useRef } from "react";
import { Text, TextInput, Image, View, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import styles from "../Styles/styles";

const PasswordReset=({navigation})=> {
  const [email, setEmail] = useState("");
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
      <View style={styles.style_Group_16}>
          <Text style={styles.style_Password_reset}>Password reset</Text>
          <View style={styles.style_Rectangle_33}>
          <TextInput
            style={styles.style_Email_1}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          </View>
      </View>
      <TouchableOpacity>
      <View style={styles.style_Rectangle_35_2}>
        <Text style={styles.style_Send_Email}>Send Email</Text>
      </View></TouchableOpacity>
    </View>
  );
}
export default PasswordReset;
