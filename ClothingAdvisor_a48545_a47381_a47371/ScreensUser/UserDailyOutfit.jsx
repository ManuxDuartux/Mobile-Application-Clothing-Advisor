import React, { useEffect,useState } from "react";
import {Text , Image , View , TouchableOpacity,TouchableWithoutFeedback} from "react-native";
import styles from "../Styles/styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import { collection,query,getDocs ,addDoc,where} from "firebase/firestore";
import { db } from "../Database/firebaseConfig";
import { getAuth } from "firebase/auth";
import axios from "axios";

const UserDailyOutfit=({navigation, favoriteColor, favoriteSeason})=>{
  const [chapeuImageUrl, setChapeuImageUrl] = useState(null);
  const [camisolaImageUrl, setCamisolaImageUrl] = useState(null);
  const [calcasImageUrl, setCalcasImageUrl] = useState(null);
  const [sapatilhasImageUrl, setSapatilhasImageUrl] = useState(null);
  const [AddStatus, setAddStatus] = useState(false);
  const [currentChapeuIndex, setCurrentChapeuIndex] = useState(0);
  const [currentCamisolaIndex, setCurrentCamisolaIndex] = useState(0);
  const [currentCalcasIndex, setCurrentCalcasIndex] = useState(0);
  const [currentSapatilhasIndex, setCurrentSapatilhasIndex] = useState(0);
  const [userGender, setUserGender] = useState(""); // Store user's gender
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await axios.get('https://api.ipma.pt/open-data/forecast/warnings/warnings_www.json');
        const temperatureData = response.data.temperature;
        setTemperature(temperatureData);
      } catch (error) {
        console.error('Error fetching temperature:', error);
      }
    };

    fetchTemperature();
  }, []);
  

  useEffect(() => {
    // Fetch the images from Firestore collections
    const fetchImages = async () => {
      try {
        // Get user gender from Firestore
        const user = getAuth().currentUser;
        if (user) {
          const userId = user.uid;
          const userSnapshot = await getDocs(
            query(collection(db, "users"),where("userId", "==", userId))
          );
          const userData = userSnapshot.docs[0]?.data();
          if (userData) {
            setUserGender(userData.gender);
          }
        }

        if (favoriteColor && favoriteSeason) {
          // Fetch outfits based on user's favorite color and favorite season
          const chapeuSnapshot = await getDocs(
            query(collection(db, "head"), where("color", "==", favoriteColor),where("season", "==", favoriteSeason))
          );
          const camisolaSnapshot = await getDocs(
            query(collection(db, "torso"), where("color", "==", favoriteColor),where("season", "==", favoriteSeason))
          );
          const calcasSnapshot = await getDocs(
            query(collection(db, "legs"), where("color", "==", favoriteColor),where("season", "==", favoriteSeason))
          );
          const sapatilhasSnapshot = await getDocs(
            query(collection(db, "footwear"), where("color", "==", favoriteColor),where("season", "==", favoriteSeason))
          );


        const chapeuImages = chapeuSnapshot.docs.map((doc) => doc.data().imageUrl);
        const camisolaImages = camisolaSnapshot.docs.map((doc) => doc.data().imageUrl);
        const calcasImages = calcasSnapshot.docs.map((doc) => doc.data().imageUrl);
        const sapatilhasImages = sapatilhasSnapshot.docs.map((doc) => doc.data().imageUrl);

        setChapeuImageUrl(chapeuImages[currentChapeuIndex]);
        setCamisolaImageUrl(camisolaImages[currentCamisolaIndex]);
        setCalcasImageUrl(calcasImages[currentCalcasIndex]);
        setSapatilhasImageUrl(sapatilhasImages[currentSapatilhasIndex]);

      } else {
        const chapeuSnapshot = await getDocs(query(collection(db, "head"), where("gender", "==", userGender)));
        const camisolaSnapshot = await getDocs(query(collection(db, "torso"), where("gender", "==", userGender)));
        const calcasSnapshot = await getDocs(query(collection(db, "legs"), where("gender", "==", userGender)));
        const sapatilhasSnapshot = await getDocs(query(collection(db, "footwear"), where("gender", "==", userGender)));


        const chapeuImages = chapeuSnapshot.docs.map((doc) => doc.data().imageUrl);
        const camisolaImages = camisolaSnapshot.docs.map((doc) => doc.data().imageUrl);
        const calcasImages = calcasSnapshot.docs.map((doc) => doc.data().imageUrl);
        const sapatilhasImages = sapatilhasSnapshot.docs.map((doc) => doc.data().imageUrl);

        setChapeuImageUrl(chapeuImages[currentChapeuIndex]);
        setCamisolaImageUrl(camisolaImages[currentCamisolaIndex]);
        setCalcasImageUrl(calcasImages[currentCalcasIndex]);
        setSapatilhasImageUrl(sapatilhasImages[currentSapatilhasIndex]);
      }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [
    favoriteColor,
    favoriteSeason,
    userGender,
    currentChapeuIndex,
    currentCamisolaIndex,
    currentCalcasIndex,
    currentSapatilhasIndex,
    temperature
  ]);

  const handleNextPress = (bodyPart) => {
    switch (bodyPart) {
      case 'chapeu':
        setCurrentChapeuIndex((prevIndex) => prevIndex + 1);
        break;
      case 'camisola':
        setCurrentCamisolaIndex((prevIndex) => prevIndex + 1);
        break;
      case 'calcas':
        setCurrentCalcasIndex((prevIndex) => prevIndex + 1);
        break;
      case 'sapatilhas':
        setCurrentSapatilhasIndex((prevIndex) => prevIndex + 1);
        break;
      default:
        break;
    }
  };

  const handlePreviousPress = (bodyPart) => {
    switch (bodyPart) {
      case 'chapeu':
        setCurrentChapeuIndex((prevIndex) => prevIndex - 1);
        break;
      case 'camisola':
        setCurrentCamisolaIndex((prevIndex) => prevIndex - 1);
        break;
      case 'calcas':
        setCurrentCalcasIndex((prevIndex) => prevIndex - 1);
        break;
      case 'sapatilhas':
        setCurrentSapatilhasIndex((prevIndex) => prevIndex - 1);
        break;
      default:
        break;
    }
  };

  const addToFavorites = async () => {
    try {
      const user = getAuth().currentUser;
      if (user) {
        const userId = user.uid;
    
        // Create a new document in the "favorites" collection with user information
        setAddStatus(true);
        const outfit = {
          userId,
          camisolaImageUrl,
          calcasImageUrl,
          sapatilhasImageUrl,
        };
  
        if (chapeuImageUrl) {
          outfit.chapeuImageUrl = chapeuImageUrl;
        }
    
        const docRef = await addDoc(collection(db, "favorites"), outfit);
        console.log("Outfit added to favorites with ID:", docRef.id);
    
        // Reset the addStatus after 2 seconds
        setTimeout(() => {
          setAddStatus(false);
        }, 2000);
      } else {
        console.log("User not logged in");
      }
    } catch (error) {
      console.error("Error adding outfit to favorites:", error);
    }
  };

  const getOutfitImageUrl = async (bodyPart) => {
    const temperatureRanges = {
      cold: [10, 20],
      moderate: [20, 30],
      hot: [30, Infinity],
    };
  
    const collectionName = bodyPart === "chapeu"
      ? "head"
      : bodyPart === "camisola"
      ? "torso"
      : bodyPart === "calcas"
      ? "legs"
      : bodyPart === "sapatilhas"
      ? "footwear"
      : "";
  
    if (!collectionName) {
      console.error("Invalid body part");
      return "DEFAULT_IMAGE_URL";
    }
  
    const q = query(collection(db, collectionName));
    const querySnapshot = await getDocs(q);
    const images = querySnapshot.docs.map((doc) => doc.data());
  
    const filteredImages = images.filter((image) => {
      const imageRange = image.range;
      const [min, max] = imageRange.split("-").map(Number);
  
      return temperature >= min && temperature <= max;
    });
  
    if (filteredImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredImages.length);
      const imageUrl = filteredImages[randomIndex].imageUrl;
  
      try {
        const storage = getStorage();
        const storageRef = ref(storage, imageUrl);
        const downloadURL = await getDownloadURL(storageRef);
  
        return downloadURL;
      } catch (error) {
        console.error("Error retrieving image from Firebase Storage:", error);
      }
    }
  };

    return (
        
 <View style={{backgroundColor:"#FFF4C2" ,flex:1} }>
   
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

            <View>
                <Text style = {styles.style_Daily_Outfit}>
                    Daily Outfit
                </Text>
            </View>
           
            <View style = {styles.style_line_4}>
            </View> 
            <TouchableOpacity  onPress={() => navigation.navigate("QuizzPage")} ><View style={styles.style_Quizz_Button}>
             <Text style={styles.style_QuizzText}>Take Small Quizz</Text>
             </View></TouchableOpacity>
            <View style = {styles.style_line_5}></View>
            
            <TouchableOpacity onPress={addToFavorites}>
              <View style={styles.style_Rectangle_36_User}>
                  <Text style={styles.style_AddToFavorites}>Add Outfit To Favorites</Text>
                   </View>
              </TouchableOpacity>
           

            <TouchableOpacity onPress={() => navigation.navigate("About")}>
      <View style={styles.style_About}>
        <Text style={styles.style_About}>About</Text>
      </View></TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate("About")}>
      <View style={styles.style_Contacts}>
        <Text style={styles.style_Contacts}>Contacts</Text>
      </View></TouchableOpacity>
     
      
        
          <TouchableOpacity onPress={() => navigation.navigate("ClothPage", { uri: chapeuImageUrl})}>
          <Image style={styles.style_chapeu} source={{ uri: chapeuImageUrl }} />
           </TouchableOpacity>
           
           <TouchableOpacity onPress={() => navigation.navigate("ClothPage", { uri: camisolaImageUrl})}>
            <Image style={styles.style_camisola} source={{ uri: camisolaImageUrl }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("ClothPage", { uri: calcasImageUrl})}>
             <Image style={styles.style_calcas} source={{ uri: calcasImageUrl }} />
             </TouchableOpacity>
             
             <TouchableOpacity onPress={() => navigation.navigate("ClothPage", { uri: sapatilhasImageUrl})}>
            <Image style={styles.style_sapatilhas} source={{ uri: sapatilhasImageUrl }} />
            </TouchableOpacity>
            
            
            <TouchableWithoutFeedback onPress={() => handleNextPress('chapeu')}>
        <View style={styles.style_play_button_right_1}>
          <Icon name="play-circle" size={35} color="#000000" />
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => handleNextPress('camisola')}>
        <View style={styles.style_play_button_right_2}>
          <Icon name="play-circle" size={35} color="#000000" />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handleNextPress('calcas')}>
        <View style={styles.style_play_button_right_3}>
          <Icon name="play-circle" size={35} color="#000000" />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handleNextPress('sapatilhas')}>
        <View style={styles.style_play_button_right_4}>
          <Icon name="play-circle" size={35} color="#000000" />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handlePreviousPress('chapeu')}>
        <View style={styles.style_play_button_left_1}>
          <Icon name="play-circle" size={35} color="#000000" />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handlePreviousPress('camisola')}>
        <View style={styles.style_play_button_left_2}>
          <Icon name="play-circle" size={35} color="#000000" />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handlePreviousPress('calcas')}>
        <View style={styles.style_play_button_left_3}>
          <Icon name="play-circle" size={35} color="#000000" />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handlePreviousPress('sapatilhas')}>
        <View style={styles.style_play_button_left_4}>
          <Icon name="play-circle" size={35} color="#000000" />
        </View>
      </TouchableWithoutFeedback>
      {AddStatus ? (
           <Text style={styles.style_Added_Message}>{AddStatus} Outfit Added to Favourites</Text>
           ) : null}
        </View>
    )
}
export default UserDailyOutfit;