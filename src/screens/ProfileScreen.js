import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import {} from "@react-navigation/native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={style.containter}>
      <Text>Profile screen</Text>
      {/* <Button
                title="go to user"
            // onPress={() => navigation.navigate("User", {
            //     name: "test",
            //     age: 12
            // })} 
            /> */}
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
