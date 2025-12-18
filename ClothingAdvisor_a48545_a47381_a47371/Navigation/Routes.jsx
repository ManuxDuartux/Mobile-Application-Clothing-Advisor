import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
//import dos screens
import LoggInOrResgister from "../Screens/LoggInOrRegister";
import LoggInPage from "../Screens/LoggInPage";
import RegisterPage from "../Screens/RegisterPage";
import OutfitPage from "../ScreensUser/ClothPage";
import Favorites from "../ScreensUser/Favorites";
import SearchOutfit from "../Screens/SearchOutfitNoLoggIn";
import AccountDetails from "../ScreensUser/AccountDetails";
import GuestSugestOutfitPage from "../Screens/GuestSugestOutfitPage"; 
import UserDailyOutfit from "../ScreensUser/UserDailyOutfit";
import SearchOutfitLoggedIn from "../ScreensUser/SeachOutfitLoggedIn";
import Logoutoracc from "../ScreensUser/Logoutoracc";
import AboutContacts from "../ScreensUser/AboutContacts";
import AboutContactsUser from "../ScreensUser/AboutContactsUser.jsx";
import Admin from "../ScreensAdmin/Admin";
import ClothesDetails from "../ScreensAdmin/ClothesDetails"
import PasswordReset from "../ScreensUser/PasswordReset";
import QuizzPage from "../ScreensUser/QuizzPage";
import AboutContactsNoUser from "../Screens/AboutUsNoUser";
const Stack = createNativeStackNavigator();

//por fazer
const LoggInOrRegisterStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="LoggInOrRegister" component={LoggInOrResgister}/>

      <Stack.Screen name="LoggInPage" component={LoggInPage} />
      
      <Stack.Screen name="RegisterPage" component={RegisterPage} />
      
      <Stack.Screen name="OutfitPage" component={GuestSugestOutfitPage} />
      
      <Stack.Screen name="Favorites" component={Favorites} />
      
      <Stack.Screen name="SearchOutfit" component={SearchOutfit} />
      
      <Stack.Screen name="Profile" component={Logoutoracc} />
      
      <Stack.Screen name="UserDailyOutfit" component={UserDailyOutfit}/>
      
      <Stack.Screen name="LoggedInSearch" component={SearchOutfitLoggedIn}/>
      
      <Stack.Screen name="AccountDetails" component={AccountDetails}/>
      
      <Stack.Screen name="About" component={AboutContactsUser}/>
      
      <Stack.Screen name="AboutNoUser" component={AboutContacts}/>
      
      <Stack.Screen name="Admin" component={Admin}/>
      
      <Stack.Screen name="AddCloth" component={ClothesDetails}/>
    
      <Stack.Screen name="PasswordReset" component={PasswordReset}/>

      <Stack.Screen name="ClothPage" component={OutfitPage}/>

      <Stack.Screen name="QuizzPage" component={QuizzPage}/>

      <Stack.Screen name="AboutNoUser1" component={AboutContactsNoUser}/>
   

    </Stack.Navigator>
  );

};

export {
  LoggInOrRegisterStack,
};
