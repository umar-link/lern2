import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import {} from "@react-navigation/native";

export default function MyBookScreen({ navigation }) {
  return (
    <View style={style.containter}>
      <Text>My Book</Text>
      <StatusBar style="auto" />
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
