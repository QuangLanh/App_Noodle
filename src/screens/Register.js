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

const Register = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../../images/logoIT.png")} />
      <Text style={styles.textLet}>Let’s Get Started</Text>
      <Text style={styles.textCreate}>Create an new account</Text>

      <View style={styles.container1}>
        <View style={styles.SectionStyle}>
          <Image
            style={styles.user}
            source={require("../../images/user_ic.png")}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            placeholder="Full Name"
          />
        </View>
      </View>

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
      <View style={styles.SectionStyle}>
        <Image
          style={styles.pass}
          source={require("../../images/pass_ic.png")}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPasswordAgain(text)}
          value={passwordAgain}
          placeholder="Password Again"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity
        style={styles.buttonSignUp}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonSignUpText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.signin}>
        <Text style={styles.haveText}>Have a account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.Textsignin}>Sign In</Text>
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
    marginTop: 100,
    width: 72,
    height: 72,
    alignSelf: "center",
  },
  textLet: {
    fontSize: 20,
    height: 28,
    color: "#223263",
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 10,
  },
  textCreate: {
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
    marginTop: 30,
  },
  SectionStyle: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    margin: 10,
    width: "95%",
    borderWidth: 0.18,
  },
  user: {
    marginLeft: 10,
    color: "#9098B1",
  },
  email: {
    marginLeft: 10,
    color: "#9098B1",
  },
  pass: {
    marginLeft: 10,
    color: "#9098B1",
  },
  buttonSignUp: {
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
  buttonSignUpText: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "#FFFFFF",
    alignSelf: "center",
  },
  signin: {
    flexDirection: "row",
    height: 18,
    width: "95%",
    alignItems: "center",
    marginTop: 15,
    marginLeft: 90,
  },
  haveText: {
    fontSize: 16,
    height: 25,
    color: "#9098B1",
    marginLeft: 10,
  },
  Textsignin: {
    height: 25,
    fontSize: 16,
    color: "#40BFFF",
    fontWeight: "bold",
    marginLeft: 5,
  },
});
export default Register;
