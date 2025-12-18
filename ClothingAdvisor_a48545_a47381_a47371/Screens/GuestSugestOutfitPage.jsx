import React, { useEffect,useState } from "react";
import {Text , Image , View , ScrollView , TouchableOpacity, TextInput,TouchableWithoutFeedback} from "react-native";
import styles from "../Styles/styles";  
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { collection,query,where,getDocs } from "firebase/firestore";
import { db } from "../Database/firebaseConfig";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const UserDailyOutfit=({navigation})=>{
  const [chapeuImageUrl, setChapeuImageUrl] = useState(null);
  const [camisolaImageUrl, setCamisolaImageUrl] = useState(null);
  const [calcasImageUrl, setCalcasImageUrl] = useState(null);
  const [sapatilhasImageUrl, setSapatilhasImageUrl] = useState(null);
  const [temperature, setTemperature] = useState(null);

  const [currentChapeuIndex, setCurrentChapeuIndex] = useState(0);
  const [currentCamisolaIndex, setCurrentCamisolaIndex] = useState(0);
  const [currentCalcasIndex, setCurrentCalcasIndex] = useState(0);
  const [currentSapatilhasIndex, setCurrentSapatilhasIndex] = useState(0);

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
        const chapeuQuery = query(collection(db, 'head'));
        const camisolaQuery = query(collection(db, 'torso'));
        const calcasQuery = query(collection(db, 'legs'));
        const sapatilhasQuery = query(collection(db, 'footwear'));

        const chapeuSnapshot = await getDocs(chapeuQuery);
        const camisolaSnapshot = await getDocs(camisolaQuery);
        const calcasSnapshot = await getDocs(calcasQuery);
        const sapatilhasSnapshot = await getDocs(sapatilhasQuery);

        const chapeuImages = chapeuSnapshot.docs.map((doc) => doc.data().imageUrl);
        const camisolaImages = camisolaSnapshot.docs.map((doc) => doc.data().imageUrl);
        const calcasImages = calcasSnapshot.docs.map((doc) => doc.data().imageUrl);
        const sapatilhasImages = sapatilhasSnapshot.docs.map((doc) => doc.data().imageUrl);

        setChapeuImageUrl(chapeuImages[currentChapeuIndex]);
        setCamisolaImageUrl(camisolaImages[currentCamisolaIndex]);
        setCalcasImageUrl(calcasImages[currentCalcasIndex]);
        setSapatilhasImageUrl(sapatilhasImages[currentSapatilhasIndex]);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [
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

            <View>
                <Text style = {styles.style_Daily_Outfit}>
                    Daily Outfit
                </Text>
            </View>
           
            <View style = {styles.style_line_4}>
            </View> 
           

            <TouchableOpacity onPress={() => navigation.navigate("AboutNoUser1")}>
      <View style={styles.style_About}>
        <Text style={styles.style_About}>About</Text>
      </View></TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate("AboutNoUser1")}>
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
            
            
            
        </View>
    )
}
export default UserDailyOutfit;