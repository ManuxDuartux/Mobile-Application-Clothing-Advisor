

import React, { useState, useRef } from "react";
import { Text, Image, View, TouchableOpacity, TextInput, ScrollView } from "react-native";
import stylesclothesdetails from '../Styles/stylesclothesdetails';
import { SelectList } from "react-native-dropdown-select-list";
import stylesAddCloth from "../Styles/stylesAddCloth";
import { db, storage } from "../Database/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import * as ImagePicker from 'expo-image-picker';


const ClothesDetails = ({ navigation }) => {
  const [showFormControl, setShowFormControl] = useState(false);
  const formControlRef = useRef(null);
  const handleSettingsIconPress = () => {
    setShowFormControl(true);
  };

  const [imageUri, setImageUri] = useState(null);
  const [name, setName] = useState("");
  const [colour, setColour] = useState("");
  const [material, setMaterial] = useState("");
  const [bodyarea, setBodyArea] = useState("");
  const [range, setRange] = useState(15);
  const [weather, setWeather] = useState("");
  const [gender, setGender] = useState("");

  const genders = [
    { value: 'Male' },
    { value: 'Female' },
    { value: 'Other' },
  ];

  const colours = [
    { value: 'Blue' },
    { value: 'Red' },
    { value: 'Green' },
    { value: 'Yellow' },
    { value: 'Pink' },
    { value: 'Purple' },
    { value: 'White' },
    { value: 'Black' },
    { value: 'Gray' },
    { value: 'Brown' },
  ];

  const materials = [
    { value: 'Cotton' },
    { value: 'Polyester' },
    { value: 'Wool' },
    { value: 'Silk' },
    { value: 'Linen' },
  ];

  const bodyareas = [
    { value: 'Head' },
    { value: 'Torso' },
    { value: 'Legs' },
    { value: 'Footwear' },
  ];

  const weathers = [
    { key: 'SO', value: 'Sunny Day' },
    { key: 'CH', value: 'Rainy Day' },
    { key: 'NE', value: 'Foggy Day' },
    { key: 'WD', value: 'Windy Day' }
  ];

  const temperatureRanges = [
    { value: 'Cold (0°C - 10°C)' },
    { value: 'Cool (10°C - 20°C)' },
    { value: 'Moderate (20°C - 30°C)' },
    { value: 'Hot (> 30°C)' },
  ];

  const saveClothDetails = async () => {
    let collectionRef;
    let docRef; // Declare the docRef variable outside of the try block
  
    switch (bodyarea) {
      case 'Head':
        collectionRef = collection(db, 'head');
        break;
      case 'Torso':
        collectionRef = collection(db, 'torso');
        break;
      case 'Legs':
        collectionRef = collection(db, 'legs');
        break;
      case 'Footwear':
        collectionRef = collection(db, 'footwear');
        break;
      default:
        collectionRef = collection(db, 'clothes');
    }
  
    try {
      docRef = await addDoc(collectionRef, {
        name: name,
        colour: colour,
        material: material,
        bodyarea: bodyarea,
        range: range,
        weather: weather,
        gender: gender,
        imageUrl: imageUri,
      });
      console.log('Cloth details saved successfully! Document ID:', docRef.id);
    } catch (error) {
      console.error('Error saving cloth details:', error);
      return; // Return early if there's an error
    }
  };
  const handleImageSelection = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission denied');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      const selectedImageUri = result.assets[0].uri;
      setImageUri(selectedImageUri);
    }
  };
  
  return (
    <View style={{ backgroundColor: '#FFF4C2', flex: 1 }}>
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

      <View style={stylesclothesdetails.style_Clothes_Details}>
        <Text style={stylesclothesdetails.style_Clothes_Details}>
          Add New Cloth
        </Text>
      </View>

      <View style={stylesAddCloth.ClothesDetailsMainDiv}>
        <View style={stylesAddCloth.inputContainer}>
          <TextInput
            style={stylesAddCloth.input}
            placeholder="Name"
            onChangeText={text => setName(text)}
            value={name}
          />
        </View>

        <View style={stylesAddCloth.selectContainer}>
          <SelectList
            setSelected={setGender}
            data={genders}
            placeholder={"Select a Gender..."}
            selected={gender}
          />
        </View>

        <View style={stylesAddCloth.selectContainer}>
          <SelectList
            setSelected={setColour}
            data={colours}
            placeholder={"Select a Colour..."}
            selected={colour}
          />
        </View>

        <View style={stylesAddCloth.inputContainer}>
          <SelectList
            setSelected={setMaterial}
            data={materials}
            placeholder={"Select a Material..."}
            selected={material}
          />
        </View>

        <View style={stylesAddCloth.selectContainer}>
          <SelectList
            setSelected={setBodyArea}
            data={bodyareas}
            placeholder={"Select a Body..."}
            selected={bodyarea}
          />
        </View>

        <View style={stylesAddCloth.selectContainer}>
          <SelectList
            setSelected={setWeather}
            data={weathers}
            placeholder={"Select a Weather..."}
            selected={weather}
          />
        </View>
        <View style={stylesAddCloth.selectContainer}>
          <SelectList
            setSelected={setRange}
            data={temperatureRanges}
            placeholder={"Select a Temperature Range..."}
            selected={range}
          />
        </View>

        <TouchableOpacity onPress={handleImageSelection} style={stylesAddCloth.buttonUploadPicture}>
          <Text>Upload Picture +</Text>
           {imageUri && <Image source={{ uri: imageUri }} style={{bottom:20, width: 140, height: 100 }} />}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { saveClothDetails(), navigation.navigate("Admin"); }} style={stylesAddCloth.buttonSave}>
          <Text style={stylesAddCloth.style_Save}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ClothesDetails;
