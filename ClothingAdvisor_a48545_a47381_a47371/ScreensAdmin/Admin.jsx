import React, { useState, useEffect } from "react";
import { Text, View, ScrollView,TouchableOpacity,Image } from "react-native";
import DataTable, { COL_TYPES } from 'react-native-datatable-component';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from "../Database/firebaseConfig";
import styles from "../Styles/styles";

import stylesAdmin from "./stylesAdmin";

const Admin=({navigation})=> {
  const [torsoData, setTorsoData] = useState([]);
  const [legsData, setLegsData] = useState([]);
  const [headData, setHeadData] = useState([]);
  const [accessoriesData, setAccessoriesData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const torsoRef = collection(db, 'torso');
      const legsRef = collection(db, 'legs');
      const headRef = collection(db, 'head');
      const accessoriesRef = collection(db, 'footwear');
      const userRef = collection(db, 'users');

      const userSnapshot = await getDocs(userRef);
      const torsoSnapshot = await getDocs(torsoRef);
      const legsSnapshot = await getDocs(legsRef);
      const headSnapshot = await getDocs(headRef);
      const accessoriesSnapshot = await getDocs(accessoriesRef);

      const torsoData = torsoSnapshot.docs.map(doc => doc.data());
      const legsData = legsSnapshot.docs.map(doc => doc.data());
      const headData = headSnapshot.docs.map(doc => doc.data());
      const accessoriesData = accessoriesSnapshot.docs.map(doc => doc.data());
      const userData=userSnapshot.docs.map(doc => doc.data());
      
      setUserData(userData);
      setTorsoData(torsoData);
      setLegsData(legsData);
      setHeadData(headData);
      setAccessoriesData(accessoriesData);
    };
    

    fetchData();
  }, []);

   // Array to store the selected cloth pieces or users
   const [selectedItems, setSelectedItems] = useState([]);

   // Function to handle selecting/unselecting an item
   const handleSelectItem = (item) => {
     const selectedIndex = selectedItems.indexOf(item);
     if (selectedIndex > -1) {
       // Item is already selected, so unselect it
       const updatedItems = [...selectedItems];
       updatedItems.splice(selectedIndex, 1);
       setSelectedItems(updatedItems);
     } else {
       // Item is not selected, so select it
       setSelectedItems([...selectedItems, item]);
     }
   };
  return (
  
    <View style={{flex: 1}}>
    <ScrollView>
    <View style={stylesAdmin.style_Background}>
               <View>
         
         <TouchableOpacity onPress={() => navigation.navigate("Profile")} >
         <Image style = {stylesAdmin.style_profile_icon } source = {require('../assets/profileicon.jpg')}>
       </Image></TouchableOpacity>
       
       <TouchableOpacity onPress={() => navigation.navigate("Favorites")}>
       <Image style = {stylesAdmin.style_favorites_icon } source = {require('../assets/favoritesicon.jpg')}>
       </Image></TouchableOpacity>
       
       <Image style = {stylesAdmin.style_logo } source = {require('../assets/logo.png')}>
       </Image>
      
       <TouchableOpacity onPress={() => navigation.navigate("LoggedInSearch")} >
       <Image style = {stylesAdmin.style_search_icon } source = {require('../assets/searchicon.jpg')}>
       </Image></TouchableOpacity>
    
      <TouchableOpacity onPress={() => navigation.navigate("UserDailyOutfit")}>
       <Image style = {stylesAdmin.style_homepage_icon } source = {require('../assets/homepageicon.jpg')}> 
       </Image></TouchableOpacity>
         
         
         <View style={stylesAdmin.style_Line_1}></View>
         <View style={stylesAdmin.style_Line_2}></View>
         
         
    </View>

            <View style={stylesAdmin.style_Group_16_4}>
            <Text>Torso Clothes:</Text>
            <DataTable
              data={torsoData}
              colNames={['name', 'gender', 'colour', 'material', 'range', 'weather']}
              colSettings={[
                { name: 'name', type: COL_TYPES.STRING, width: '20%' },
                { name: 'gender', type: COL_TYPES.STRING, width: '20%' },
                { name: 'colour', type: COL_TYPES.STRING, width: '20%' },
                { name: 'material', type: COL_TYPES.STRING, width: '20%' },
                { name: 'range', type: COL_TYPES.STRING, width: '20%' },
                { name: 'weather', type: COL_TYPES.STRING, width: '20%' },
              ]}
              noOfPages={2}
              backgroundColor={'rgba(23,2,4,0.2)'}
              headerLabelStyle={{ color: 'grey', fontSize: 12 }}
            /></View>
          
    
          {/* Render the legs table */}
          <View style={stylesAdmin. style_Group_16_3}>
            <Text>Legs Clothes:</Text>
            <DataTable
              data={legsData}
              colNames={['name', 'gender', 'colour', 'material', 'range', 'weather']}
              colSettings={[
                { name: 'name', type: COL_TYPES.STRING, width: '20%' },
                { name: 'gender', type: COL_TYPES.STRING, width: '20%' },
                { name: 'colour', type: COL_TYPES.STRING, width: '20%' },
                { name: 'material', type: COL_TYPES.STRING, width: '20%' },
                { name: 'range', type: COL_TYPES.STRING, width: '20%' },
                { name: 'weather', type: COL_TYPES.STRING, width: '20%' },
              ]}
              noOfPages={2}
              backgroundColor={'rgba(23,2,4,0.2)'}
              headerLabelStyle={{ color: 'grey', fontSize: 12 }}
            /></View>
          
    
          {/* Render the head table */}
          <View style={stylesAdmin.style_Group_16_1}>
            <Text>Head Clothes:</Text>
            <DataTable
              data={headData}
              colNames={['name', 'gender', 'colour', 'material', 'range', 'weather']}
              colSettings={[
                { name: 'name', type: COL_TYPES.STRING, width: '20%' },
                { name: 'gender', type: COL_TYPES.STRING, width: '20%' },
                { name: 'colour', type: COL_TYPES.STRING, width: '20%' },
                { name: 'material', type: COL_TYPES.STRING, width: '20%' },
                { name: 'range', type: COL_TYPES.STRING, width: '20%' },
                { name: 'weather', type: COL_TYPES.STRING, width: '20%' },
              ]}
              noOfPages={2}
              backgroundColor={'rgba(23,2,4,0.2)'}
              headerLabelStyle={{ color: 'grey', fontSize: 12 }}
            />
          </View>
    
          {/* Render the accessories table */}
          <View style={stylesAdmin.style_Group_16_2}>
            <Text>Feetwear:</Text>
            <DataTable
              data={accessoriesData}
              colNames={['name', 'gender', 'colour', 'material', 'range', 'weather']}
              colSettings={[
                { name: 'name', type: COL_TYPES.STRING, width: '20%' },
                { name: 'gender', type: COL_TYPES.STRING, width: '20%' },
                { name: 'colour', type: COL_TYPES.STRING, width: '20%' },
                { name: 'material', type: COL_TYPES.STRING, width: '20%' },
                { name: 'range', type: COL_TYPES.STRING, width: '20%' },
                { name: 'weather', type: COL_TYPES.STRING, width: '20%' },
              ]}
              noOfPages={2}
              backgroundColor={'rgba(23,2,4,0.2)'}
              headerLabelStyle={{ color: 'grey', fontSize: 12 }}
            /></View>
    
            <View style={stylesAdmin.style_Group_16_5}>
            <Text>Users:</Text>
              <DataTable
              data={userData}
              colNames={['name', 'gender', 'local', 'password', 'email', 'username']}
              colSettings={[
                { name: 'name', type: COL_TYPES.STRING, width: '20%' },
                { name: 'gender', type: COL_TYPES.STRING, width: '20%' },
                { name: 'local', type: COL_TYPES.STRING, width: '20%' },
                { name: 'password', type: COL_TYPES.STRING, width: '20%' },
                { name: 'email', type: COL_TYPES.STRING, width: '20%' },
                { name: 'username', type: COL_TYPES.STRING, width: '10%' },
              ]}
              noOfPages={2}
              backgroundColor={'rgba(23,2,4,0.2)'}
              headerLabelStyle={{ color: 'grey', fontSize: 12 }}
            /></View>
            
            <TouchableOpacity><View style={stylesAdmin.style_Rectangle_35_3}>
                 <Text style={styles.style_DELETE}>DELETE SELECTED</Text>
                  </View></TouchableOpacity>
    
                  <TouchableOpacity onPress={() => navigation.navigate("AddCloth")}><View style={stylesAdmin.style_Rectangle_35_4}>
                 <Text style={styles.style_ADD}>ADD NEW PIECE</Text>
                  </View></TouchableOpacity>
          
          </View>
    </ScrollView>
    </View>
  );
}
export default Admin;
