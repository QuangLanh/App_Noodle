import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Button,
} from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../../images/logoIT.png")} />
      <Text style={styles.textWC}>Welcome to IT Shop</Text>
      <Text style={styles.textSign}>Sign in to continue</Text>

      <View style={styles.container1}>
        <View style={styles.SectionStyle}>
          <Image
            style={styles.email}
            source={require("../../images/email_ic.png")}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="Your Email"
          />
        </View>
      </View>

      <View style={styles.SectionStyle}>
        <Image
          style={styles.pass}
          source={require("../../images/pass_ic.png")}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Password"
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Categories")}
        style={styles.buttonLogin}
      >
        <Text style={styles.buttonLoginText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.textOr}>OR</Text>

      <TouchableOpacity onPress={() => navigation.navigate("")}>
        <View style={styles.google}>
          <Image
            style={styles.google_ic}
            source={require("../../images/google_ic.png")}
          />
          <Text style={styles.google_text}>Login with Google</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("")}>
        <View style={styles.facebook}>
          <Image
            style={styles.facebook_ic}
            source={require("../../images/facebook_ic.png")}
          />
          <Text style={styles.facebook_text}>Login with facebook</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("")}>
        <Text style={styles.textForgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.register}>
        <Text style={styles.dontText}>Don’t have a account? </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.Textregister}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logo: {
    marginTop: 60,
    width: 72,
    height: 72,
    alignSelf: "center",
  },
  textWC: {
    fontSize: 20,
    height: 28,
    color: "#223263",
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 10,
  },
  textSign: {
    fontSize: 16,
    height: 22,
    color: "#9098B1",
    alignSelf: "center",
    marginTop: 10,
  },
  input: {
    height: 37,
    width: "85%",
    margin: 10,
    fontSize: 15,
    padding: 10,
    borderWidth: 0.16,
  },
  container1: {
    justifyContent: "center",
    marginTop: 25,
  },
  SectionStyle: {
    flexDirection: "row",
    alignItems: "center",
    height: 45,
    margin: 10,
    width: "95%",
    borderWidth: 0.18,
  },
  email: {
    marginLeft: 10,
    color: "#9098B1",
  },
  pass: {
    marginLeft: 10,
    color: "#9098B1",
  },
  buttonLogin: {
    backgroundColor: "#40BFFF",
    height: 57,
    margin: 10,
    width: "95%",
    marginTop: 10,
    borderRadius: 7,
    padding: 12,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonLoginText: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "#FFFFFF",
    alignSelf: "center",
  },
  textOr: {
    fontSize: 16,
    height: 21,
    color: "#9098B1",
    alignSelf: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
  google: {
    flexDirection: "row",
    height: 45,
    width: "95%",
    borderWidth: 0.18,
    alignItems: "center",
    marginTop: 12,
    marginLeft: 10,
  },
  google_ic: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  google_text: {
    height: 25,
    marginLeft: 105,
    fontSize: 16,
    color: "#9098B1",
    fontWeight: "bold",
  },
  facebook: {
    flexDirection: "row",
    height: 45,
    width: "95%",
    borderWidth: 0.18,
    alignItems: "center",
    marginTop: 12,
    marginLeft: 10,
  },
  facebook_ic: {
    width: 13,
    height: 25,
    marginLeft: 20,
  },
  facebook_text: {
    height: 25,
    marginLeft: 105,
    fontSize: 16,
    color: "#9098B1",
    fontWeight: "bold",
  },
  textForgot: {
    fontSize: 18,
    height: 25,
    color: "#40BFFF",
    alignSelf: "center",
    marginTop: 20,
    fontWeight: "bold",
    marginLeft: 35,
  },
  register: {
    flexDirection: "row",
    height: 18,
    width: "95%",
    alignItems: "center",
    marginTop: 15,
    marginLeft: 90,
  },
  dontText: {
    fontSize: 16,
    height: 25,
    color: "#9098B1",
    marginLeft: 10,
  },
  Textregister: {
    height: 25,
    fontSize: 16,
    color: "#40BFFF",
    fontWeight: "bold",
  },
});
export default Login;
