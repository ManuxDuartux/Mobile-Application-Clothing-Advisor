import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LoggInOrRegisterStack,
} from "./Routes";

const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoggInOrRegister"
        component={LoggInOrRegisterStack}
        options={{
          headerShown: false,
          headerTitle: "Login/Register",
          headerTitleStyle: { alignSelf: "center", color: "#333" },
        }}

      />
      {/* other screens */}
    </Stack.Navigator>
  );
}

export default MyTabs;
