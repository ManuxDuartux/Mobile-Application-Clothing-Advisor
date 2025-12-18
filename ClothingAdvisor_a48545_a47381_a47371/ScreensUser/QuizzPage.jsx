import React, { useState } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { doc, updateDoc } from "firebase/firestore";
import { db, auth } from "../Database/firebaseConfig";
import { SelectList } from "react-native-dropdown-select-list";
import stylesAddCloth from "../Styles/stylesAddCloth";
import styles3 from "../Styles/stylesRegister";
const QuizzPage = ({ navigation }) => {
  const [favoriteColor, setFavoriteColor] = useState("");
  const [favoriteSeason, setFavoriteSeason] = useState("");
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
  const weathers = [
    { key: 'SO', value: 'Sunny Day' },
    { key: 'CH', value: 'Rainy Day' },
    { key: 'NE', value: 'Foggy Day' },
    { key: 'WD', value: 'Windy Day' }
  ];
  
  const handleSaveChanges = async () => {
    try {
      const currentUser = auth.currentUser;

      if (currentUser) {
        const userRef = doc(db, "users", currentUser.uid);

        await updateDoc(userRef, {
          favoriteColor: favoriteColor,
          favoriteSeason: favoriteSeason,
        });

        console.log("User data updated successfully");
      } else {
        console.log("No user is currently logged in");
      }
      // Navigate to Home Page
      navigation.navigate("UserDailyOutfit");
    } catch (error) {
      console.error("Error updating user data: ", error);
    }
  };

  return (
    <View style={{ backgroundColor: "#FFF4C2", flex: 1 }}>
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
      <View style={styles.style_Line_1}></View>
      <View style={styles.style_Line_2}></View>
      <View>
        {/* Favorite Color */}
        <View style={stylesAddCloth.selectContainer_1}>
          <SelectList
            setSelected={setFavoriteColor}
            data={colours}
            placeholder={"Select Favourite Color"}
            selected={favoriteColor}
          />
        </View>

        {/* Favorite Season */}
        <View style={stylesAddCloth.selectContainer_2}>
          <SelectList
            setSelected={setFavoriteSeason}
            data={weathers}
            placeholder={"Select Favourite Weather"}
            selected={favoriteSeason}
          />
        </View>

        {/* Save Changes Button */}
        <TouchableOpacity onPress={handleSaveChanges}>
          <View style={styles3.style_RectangleRegister_1}>
            <Text style={styles3.style_SaveChanges}>Save Quizz Options</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuizzPage;
