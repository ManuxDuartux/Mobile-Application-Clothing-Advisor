import React, { useState } from "react";
import { Text, TextInput, Image, View, ScrollView, TouchableOpacity } from "react-native";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Database/firebaseConfig";
import styles from "../Styles/styles";
import styles2 from "../Styles/stylesSearchOutfit";

const SearchOutfitLoggedIn = ({ navigation }) => {
  const [search, setSearchbar] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const headCollectionRef = collection(db, "head");
      const legsCollectionRef = collection(db, "legs");
      const torsoCollectionRef = collection(db, "torso");
      const feetwearCollectionRef = collection(db, "feetwear");
  
      const headQuerySnapshot = await getDocs(headCollectionRef);
      const legsQuerySnapshot = await getDocs(legsCollectionRef);
      const torsoQuerySnapshot = await getDocs(torsoCollectionRef);
      const feetwearQuerySnapshot = await getDocs(feetwearCollectionRef);
  
      const results = [];
  
      const searchTerms = search.toLowerCase().split(" ");
  
      headQuerySnapshot.forEach((doc) => {
        const attributes = doc.data().attribute.toLowerCase();
        const hasMatch = searchTerms.some((term) => attributes.includes(term));
        if (hasMatch) {
          results.push(doc.data());
        }
      });
  
      legsQuerySnapshot.forEach((doc) => {
        const attributes = doc.data().attribute.toLowerCase();
        const hasMatch = searchTerms.some((term) => attributes.includes(term));
        if (hasMatch) {
          results.push(doc.data());
        }
      });
  
      torsoQuerySnapshot.forEach((doc) => {
        const attributes = doc.data().attribute.toLowerCase();
        const hasMatch = searchTerms.some((term) => attributes.includes(term));
        if (hasMatch) {
          results.push(doc.data());
        }
      });
  
      feetwearQuerySnapshot.forEach((doc) => {
        const attributes = doc.data().attribute.toLowerCase();
        const hasMatch = searchTerms.some((term) => attributes.includes(term));
        if (hasMatch) {
          results.push(doc.data());
        }
      });
  
      setSearchResults(results);
    } catch (error) {
      console.log("Error searching clothes:", error);
    }
  };
  

  return (
    <View style={styles.style_Background}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image style={styles.style_profile_icon} source={require('../assets/profileicon.jpg')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Favorites")}>
          <Image style={styles.style_favorites_icon} source={require('../assets/favoritesicon.jpg')} />
        </TouchableOpacity>

        <Image style={styles.style_logo} source={require('../assets/logo.png')} />

        <TouchableOpacity onPress={() => navigation.navigate("LoggedInSearch")}>
          <Image style={styles.style_search_icon} source={require('../assets/searchicon.jpg')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("UserDailyOutfit")}>
          <Image style={styles.style_homepage_icon} source={require('../assets/homepageicon.jpg')} />
        </TouchableOpacity>

        <View style={styles.style_Line_1} />
        <View style={styles.style_Line_2} />
      </View>

      <View style={styles.style_Outfits}>
        <Text style={styles.style_Outfits}>Search Clothes</Text>
      </View>

      {searchResults.map((result, index) => (
        <Image key={index} style={styles2.style_pictureicon} source={result.imageSource} />
      ))}

      <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <View style={styles.style_About}>
          <Text style={styles.style_About}>About</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <View style={styles.style_Contacts}>
          <Text style={styles.style_Contacts}>Contacts</Text>
        </View>
      </TouchableOpacity>

      <View style={styles2.style_RectangleGrande}>
        <TextInput
          style={styles2.style_search}
          placeholder="Search"
          onChangeText={(text) => setSearchbar(text)}
          value={search}
          onSubmitEditing={handleSearch} // Call handleSearch when the user submits the search
        />
      </View>
      
    </View>
  );
};

export default SearchOutfitLoggedIn;
