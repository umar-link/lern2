import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import TabNavigator from "./TabNavigator";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function NavBar() {
  const [token, setToken] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const value = await AsyncStorage.getItem("token");
        console.log(value);
        if (value !== null && value === "true") {
          setToken(true);

          navigation.canGoBack("TabNavigator");
        }
      } catch (error) {
        console.log("Error retrieving user data: ", error);
        return;
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
