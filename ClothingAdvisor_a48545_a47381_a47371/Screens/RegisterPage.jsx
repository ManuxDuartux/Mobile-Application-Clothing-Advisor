

import React, { useState } from "react";
import { Text, TextInput, Image, View, TouchableOpacity } from "react-native";
import styles from "../Styles/styles";
import styles3 from "../Styles/stylesRegister";
import { SelectList } from "react-native-dropdown-select-list";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Database/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";





const RegisterPage = ({ navigation }) => {


  const generos = [
    { value: 'Male' },
    { value: 'Female' },
    { value: 'Other' },
  ];
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [locality, setLocality] = useState("");
  const [gender, setGender] = useState("");
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");

const handleRegister = async () => {
    if (password !== ConfirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const docRef = await addDoc(collection(db, "users"), {
        username,
        email,
        locality,
        gender,
        surname,
        name,
        userId: user.uid, // Store the user's UID in Firestore
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error registering user: ", error);
    }
  };
  

  return (
    <View style={styles.style_Background}>
      <View>
        <Image style={styles.style_logo} source={require('../assets/logo.png')} />
        <TouchableOpacity>
          <Image style={styles.style_search_icon} source={require('../assets/searchicon.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.style_homepage_icon} source={require('../assets/homepageicon.jpg')} />
        </TouchableOpacity>

        <View style={styles.style_Line_1}></View>
        <View style={styles.style_Line_2}></View>
      </View>

      <View style={styles3.style_Group_21}>
        <View style={styles3.style_Rectangle_40}>
          <TextInput
            style={styles3.style_Username}
            placeholder="Username"
            onChangeText={text => setUsername(text)}
            value={username}
          />
        </View>

        <View style={styles3.style_RectangleGrande3}>
          <TextInput
            style={styles3.style_Email}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>

        <View style={styles3.style_Rectangle_42}>
          <TextInput
            style={styles3.style_Password}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>

        <View style={styles3.style_RectangleGrande1}>
          <TextInput
            style={styles3.style_ConfirmPassword}
            placeholder="Confirm Password"
            onChangeText={text => setConfirmPassword(text)}
            value={ConfirmPassword}
          />
        </View>

        <View style={styles3.style_RectangleGrande2}>
          <TextInput
            style={styles3.style_Localidade}
            placeholder="Localidade"
            onChangeText={text => setLocality(text)}
            value={locality}
          />
        </View>

        <View style={styles3.SelectList}>
          <View style={styles3.selectListContainer}>
            <SelectList
              setSelected={setGender}
              data={generos}
              placeholder="Select your Gender"
              selected={gender}
            />
          </View>
        </View>

        <View style={styles3.style_RectanglePequeno1}>
          <TextInput
            style={styles3.style_Apelido}
            placeholder="Apelido"
            onChangeText={text => setSurname(text)}
            value={surname}
          />
        </View>

        <View style={styles3.style_RectanglePequeno}></View>

        <View style={styles3.style_Nome}>
          <TextInput
            style={styles3.style_Nome}
            placeholder="Nome"
            onChangeText={text => setName(text)}
            value={name}
          />
        </View>

        

        <TouchableOpacity onPress={() => { handleRegister(); navigation.navigate("LoggInPage"); }}>
          <View style={styles3.style_RectangleRegister_12}>
            <Text style={styles3.style_Register_12}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default RegisterPage;
