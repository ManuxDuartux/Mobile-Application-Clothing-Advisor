import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './Navigation/TabNavigation';
export default function App() {
  return (
    //<OutfitPage></OutfitPage>
    //<TakeQuizzPage></TakeQuizzPage>
    //<QuizzPage></QuizzPage>
   
    //<GuestSugestOutfitPage></GuestSugestOutfitPage>
   // <Admin></Admin>
    //<LoggInOrRegister></LoggInOrRegister>
    //<LoggInPage></LoggInPage>
    //<PasswordReset></PasswordReset>
    //<RegisterPage></RegisterPage>
    //<SearchOutfit></SearchOutfit>
    //<Logoutoracc></Logoutoracc>
    //<AboutContacts></AboutContacts>
    //<Favorites></Favorites>
   // <ClothesDetails></ClothesDetails>
    //<AccountDetails></AccountDetails>
<NavigationContainer>
      <MyTabs />
      {/* <TabsAdmin /> */}
    </NavigationContainer>
  );
}

