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

const add_Card = ({ navigation }) => {
  const [number, setNumber] = useState("");
  const [holder, setHolder] = useState("");
  const [date, setDate] = useState("");
  const [code, setCode] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.addcard}>
        <TouchableOpacity onPress={() => navigation.navigate("Credit")}>
          <Image
            style={styles.undo_ic}
            source={require("../../images/undo_ic.png")}
          />
        </TouchableOpacity>
        <Text style={styles.add_text}>Add Card</Text>
      </View>

      <View style={styles.line}></View>

      <Text style={styles.number_text}>Card Number</Text>

      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNumber(text)}
          value={number}
          placeholder="Enter Card Number"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.date}>Expiration Date</Text>
        <Text style={styles.code}>Security Code</Text>
      </View>
      <View style={styles.SectionStyle1}>
        <TextInput
          style={styles.date_input}
          onChangeText={(text) => setDate(text)}
          value={date}
          placeholder="Enter Date"
        />
        <TextInput
          style={styles.code_input}
          onChangeText={(text) => setCode(text)}
          value={code}
          placeholder="Enter Code"
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.number_text}>Card Holder</Text>

      <View style={styles.SectionStyle}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setHolder(text)}
          value={holder}
          placeholder="Enter Card Number"
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("save_Card")}
        style={styles.buttonAdd}
      >
        <Text style={styles.buttonAddText}>Add Card</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  addcard: {
    flexDirection: "row",
    height: 90,
    width: "100%",
    borderWidth: 0.1,
    alignItems: "center",
    marginLeft: 10,
  },
  undo_ic: {
    width: 8,
    height: 12,
    marginLeft: 10,
    color: "#223263",
  },
  add_text: {
    height: 22,
    width: 220,
    marginLeft: 30,
    fontSize: 18,
    color: "#223263",
    fontWeight: "bold",
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  number_text: {
    marginTop: 30,
    width: 103,
    height: 21,
    fontSize: 16,
    marginLeft: 16,
    fontWeight: "bold",
    color: "#223263",
  },
  buttonAdd: {
    backgroundColor: "#40BFFF",
    height: 57,
    margin: 10,
    width: "90%",
    marginTop: 300,
    borderRadius: 7,
    padding: 12,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonAddText: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "#FFFFFF",
    alignSelf: "center",
  },
  input: {
    height: 37,
    width: "85%",
    margin: 10,
    fontSize: 15,
    padding: 10,
    borderWidth: 0.16,
  },
  date_input: {
    height: 50,
    width: 165,
    marginLeft: 5,
    fontSize: 15,
    padding: 10,
    borderWidth: 0.2,
    borderRadius: 5,
  },
  code_input: {
    height: 50,
    width: 165,
    marginLeft: 24,
    fontSize: 15,
    padding: 10,
    borderWidth: 0.2,
    borderRadius: 5,
  },
  SectionStyle: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    margin: 10,
    width: "95%",
    borderWidth: 0.18,
  },
  SectionStyle1: {
    flexDirection: "row",
    alignItems: "center",
    height: 20,
    margin: 10,
    width: "95%",
  },
  pass: {
    marginLeft: 10,
    color: "#9098B1",
  },
  card: {
    flexDirection: "row",
    height: 70,
    width: "100%",
    borderWidth: 0.1,
    alignItems: "center",
  },
  date: {
    height: 25,
    marginLeft: 16,
    fontSize: 16,
    color: "#223263",
    fontWeight: "bold",
  },
  code: {
    height: 25,
    marginLeft: 70,
    fontSize: 16,
    color: "#223263",
    fontWeight: "bold",
  },
});
export default add_Card;
