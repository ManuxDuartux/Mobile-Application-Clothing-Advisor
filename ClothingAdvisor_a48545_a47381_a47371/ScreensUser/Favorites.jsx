import React, { useEffect, useState } from "react";
import { Text, Image, View, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { collection, query, getDocs, deleteDoc, doc, where } from "firebase/firestore";
import { db } from "../Database/firebaseConfig";
import styles from "../Styles/styles";
import { getAuth } from "firebase/auth";

const Favorites = ({ navigation }) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const user = getAuth().currentUser;
        if (user) {
          const userId = user.uid;

          const favoritesQuery = query(collection(db, "favorites"), where("userId", "==", userId));
          const favoritesSnapshot = await getDocs(favoritesQuery);
          const favoritesData = favoritesSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setImageUrls(favoritesData);
        } else {
          console.log("User not logged in");
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchImageUrls();
  }, []);

  const handleNextPress = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handlePreviousPress = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return imageUrls.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleRemoveFromFavorites = async () => {
    try {
      const favoriteToRemove = imageUrls[currentIndex];
      await deleteDoc(doc(db, "favorites", favoriteToRemove.id));

      // Refetch the updated favorites after removing the item
      const user = getAuth().currentUser;
      if (user) {
        const userId = user.uid;

        const favoritesQuery = query(collection(db, "favorites"), where("userId", "==", userId));
        const favoritesSnapshot = await getDocs(favoritesQuery);
        const favoritesData = favoritesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setImageUrls(favoritesData);
        setCurrentIndex(0); // Reset the currentIndex to 0 after removing a favorite
      } else {
        console.log("User not logged in");
      }
    } catch (error) {
      console.error("Error removing from favorites:", error);
    }
  };

  return (
    <View style={{ backgroundColor: "#FFF4C2", flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Image style={styles.style_profile_icon} source={require("../assets/profileicon.jpg")} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Favorites")}>
        <Image style={styles.style_favorites_icon} source={require("../assets/favoritesicon.jpg")} />
      </TouchableOpacity>

      <Image style={styles.style_logo} source={require("../assets/logo.png")} />

      <TouchableOpacity onPress={() => navigation.navigate("LoggedInSearch")}>
        <Image style={styles.style_search_icon} source={require("../assets/searchicon.jpg")} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("UserDailyOutfit")}>
        <Image style={styles.style_homepage_icon} source={require("../assets/homepageicon.jpg")} />
      </TouchableOpacity>

      <View style={styles.style_Line_1} />
      <View style={styles.style_Line_2} />

      <View>
        <View style={styles.style_favourites_image}>
          <Image style={styles.style_chapeu} source={{ uri: imageUrls[currentIndex]?.chapeuImageUrl }} />
          <Image style={styles.style_camisola} source={{ uri: imageUrls[currentIndex]?.camisolaImageUrl }} />
          <Image style={styles.style_calcas} source={{ uri: imageUrls[currentIndex]?.calcasImageUrl }} />
          <Image style={styles.style_sapatilhas} source={{ uri: imageUrls[currentIndex]?.sapatilhasImageUrl }} />
        </View>

        <TouchableWithoutFeedback onPress={handleNextPress}>
          <View style={styles.style_play_button_right_1_favourites}>
            <Icon name="play-circle" size={35} color="#000000" />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handlePreviousPress}>
          <View style={styles.style_play_button_left_1_favourites}>
            <Icon name="play-circle" size={35} color="#000000" />
          </View>
        </TouchableWithoutFeedback>

        <TouchableOpacity onPress={handleRemoveFromFavorites}>
          <View style={styles.style_Rectangle_36_favourites}>
            <Text style={styles.style_AddToFavorites}>Remove Outfit From Favorites</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Favorites;
