import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function UserScreen({ route, navigation }) {
  const name = route.params?.name || "";
  const age = route.params?.age || "";

  return (
    <View style={style.containter}>
      <Text>User screen</Text>
      <Text> {name ?? "no name"} </Text>
      <Text> {age ?? "no age"} </Text>
      <StatusBar style="auto" />
      <Button
        title="Logout"
        onPress={() => {
          // console.log(navigation);
          AsyncStorage.removeItem("token");
          console.log(route);
          navigation.navigate("Login");
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
