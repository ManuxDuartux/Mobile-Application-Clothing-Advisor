import React, { useState, useEffect } from "react";
import { Text, TextInput, Image, View,TouchableOpacity } from "react-native";
import styles from "../Styles/styles";
import styles3 from "../Styles/stylesRegister";
import { SelectList } from "react-native-dropdown-select-list";
import { collection, query, where, getDocs, doc,updateDoc  } from "firebase/firestore";
import { db } from "../Database/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const AccountDetails = ({ navigation }) => {
  const generos = [
    { value: 'Male' },
    { value: 'Female' },
    { value: 'Other' },
  ];

 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [locality, setLocality] = useState("");
  const [gender, setGender] = useState("");
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const usersCollectionRef = collection(db, "users");
          const q = query(usersCollectionRef, where("email", "==", user.email));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data();
           
            setEmail(userData.email);
            setLocality(userData.locality);
            setGender(userData.gender);
            setSurname(userData.surname);
            setName(userData.name);
            setPassword(userData.password);
          }
        } catch (error) {
          console.error("Error fetching user details: ", error);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleRegister = async () => {
    if (password !== ConfirmPassword) {
      console.log("Passwords do not match");
      return;
    }
  
    try {
      const auth = getAuth();
      const user = auth.currentUser;
  
      if (user) {
        const userRef = doc(db, "users", user.uid);
  
        await updateDoc(userRef, {
          
          email,
          password,
          locality,
          gender,
          surname,
          name,
        });
  
        console.log("User document updated");
      } else {
        console.log("No user found");
      }
    } catch (error) {
      console.error("Error updating user document: ", error);
    }
  };
  

  return (
    <View style={styles.style_Background}>
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
      
      <View style={styles3.style_Group_21}>
  
        <View style={styles3.style_RectangleGrande3}>
        <TextInput
            style={styles3.style_Email}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}></TextInput></View> 

            <View style={styles3.style_RectangleGrande2}>
          <TextInput
            style={styles3.style_Localidade}
            placeholder="Localidade"
            onChangeText={text => setLocality(text)}
            value={locality}
          ></TextInput></View>

          <View style={styles3.style_RectanglePequeno}>
          <TextInput 
          style={styles3.style_Nome}placeholder="Nome"onChangeText={text => 
          setName(text)}value={name}></TextInput>
          </View>

          <View style={styles3.style_RectanglePequeno1}>
          <TextInput style={styles3.style_Apelido}
            placeholder="Apelido"
            onChangeText={text => setSurname(text)}
            value={surname}
          ></TextInput></View>


          <View style={styles3.style_Rectangle_42}>
          <TextInput
           style={styles3.style_Password}
           placeholder="Password"
           onChangeText={text => setPassword(text)}
           value={password}
           secureTextEntry={true}
            ></TextInput></View>
         
          <View style={styles3.style_RectangleGrande1}>
          <TextInput
            style={styles3.style_ConfirmPassword}
            placeholder="Comfirm Password"
            onChangeText={text => setConfirmPassword(text)}
            value={ConfirmPassword}></TextInput></View>
            

          <View style={styles3.SelectList}>
          <View style={styles3.selectListContainer}>
            <SelectList
              setSelected={setGender}
              data={generos}
              placeholder="Select your Gender"
              selected={generos}
            />
          </View>
        </View>

         <TouchableOpacity onPress={() => { handleRegister() }}>
          <View style={styles3.style_RectangleRegister}>
          <Text style={styles3.style_Register}>Save Changes</Text></View>
        </TouchableOpacity>
        </View>
      </View>
  );
}
export default AccountDetails;
