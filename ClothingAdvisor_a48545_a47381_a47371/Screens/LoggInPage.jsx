import React, { useState,useEffect } from "react";
import { Text, TextInput, Image, View, TouchableOpacity } from "react-native";
import styles from "../Styles/styles";
import { CheckBox } from "react-native-elements";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Database/firebaseConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoggInPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState("");
  useEffect(() => {
    // Check if there are stored credentials
    retrieveStoredCredentials();
  }, []);
  
  const retrieveStoredCredentials = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem("storedEmail");
      const storedPassword = await AsyncStorage.getItem("storedPassword");
  
      if (storedEmail && storedPassword) {
        setEmail(storedEmail);
        setPassword(storedPassword);
        setRememberMe(true);
      }
    } catch (error) {
      console.log("Error retrieving stored credentials:", error);
    }
  };
  


  const handleRememberMe = async () => {
    setRememberMe(!rememberMe);

    // Store or remove credentials based on the "Remember Me" checkbox
    if (!rememberMe) {
      try {
        await AsyncStorage.setItem("storedEmail", email);
        await AsyncStorage.setItem("storedPassword", password);
      } catch (error) {
        console.log("Error storing credentials:", error);
      }
    } else {
      try {
        await AsyncStorage.removeItem("storedEmail");
        await AsyncStorage.removeItem("storedPassword");
      } catch (error) {
        console.log("Error removing stored credentials:", error);
      }
    }
  };
  const handleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
  
      const usersCollectionRef = collection(db, "users");
      const q = query(usersCollectionRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        console.log("User logged in successfully");
        const user = querySnapshot.docs[0].data();
  
        if (email === "admin@admin.com" && password === "123456789") {
          navigation.navigate("Admin"); // Navigate to AdminPage for admin credentials
        } else {
          navigation.navigate("UserDailyOutfit"); // Navigate to UserDailyOutfit for other credentials
        }
      } else {
        setLoginError("Invalid credentials"); // Set the login error message
      }
    } catch (error) {
      console.log("Error logging in:", error);
    }
  };
  return (
    <View style={styles.style_Background}>
      <View>
        <Image style={styles.style_logo} source={require('../assets/logo.png')}></Image>

        

        <TouchableOpacity onPress={() => navigation.navigate("OutfitPage")}>
          <Image style={styles.style_homepage_icon} source={require('../assets/homepageicon.jpg')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SearchOutfit")}>
          <Image style={styles.style_search_icon} source={require('../assets/searchicon.jpg')}></Image>
        </TouchableOpacity>

        <View style={styles.style_Line_1}></View>
        <View style={styles.style_Line_2}></View>
      </View>

      <Text style={styles.style_Log_In}>Login Page</Text>

      <View style={styles.style_Group_16}>  
       {loginError ? (
        <Text style={styles.style_Error_Message}>{loginError} error on log in</Text>
      ) : null}
        <View style={styles.style_Rectangle_33_1}>
          <TextInput
            style={styles.style_Email}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>

        <View style={styles.style_Rectangle_34}>
          <TextInput
            style={styles.style_Password}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>

        <TouchableOpacity onPress={handleLogin}>
          <View style={styles.style_Rectangle_35_1}>
            <Text style={styles.style_Log_In_1}>LOGIN</Text>
          </View>
        </TouchableOpacity>

      </View>

      <View style={styles.style_div_form_group}>
      <CheckBox
        title="Remember me"
        checked={rememberMe}
        onPress={handleRememberMe}
        containerStyle={{backgroundColor:"transparent",borderWidth:0}}
        checkedColor="brown"
        textStyle={{fontWeight: 'normal',
        fontSize: 13,}}
      />

        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.style_Forgot_Password_}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default LoggInPage;
