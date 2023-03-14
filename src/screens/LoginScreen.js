import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(false);

  const loginMethod = async (username, password) => {
    return await axios
      .post("https://sm-be-stg.k-link.dev/api/login", {
        username,
        password,
      })
      .then((res) => res.data)
      .catch((err) => err.response.data);
  };

  const loginHandler = async () => {
    const login = await loginMethod(username, password);

    if (login.status) {
      await AsyncStorage.setItem("token", "true");
      navigation.navigate("TabNavigator");
      // navi.navigate()
      setToken(true);
      return;
    }
    return Alert.alert("Wrong authentication", login.message);
  };

  const checkUserLoggedIn = async () => {
    const user = await AsyncStorage.getItem("token");
    console.log(user);
    if (user) {
      navigation.reset({
        routes: [{ name: "TabNavigator" }],
      });
      return true;
    }
    return false;
  };

  useEffect(() => {
    const log = checkUserLoggedIn();
    console.log(log, token);
  }, [token]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(txt) => setUsername(txt)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(txt) => setPassword(txt)}
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => loginHandler()}>
        <Text style={styles.btnText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  btn: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  home: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  homeText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
