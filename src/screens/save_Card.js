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

const save_Card = ({ navigation }) => {
  const [number, setNumber] = useState("");
  const [holder, setHolder] = useState("");
  const [date, setDate] = useState("");
  const [code, setCode] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.savecard}>
        <TouchableOpacity onPress={() => navigation.navigate("add_Card")}>
          <Image
            style={styles.undo_ic}
            source={require("../../images/undo_ic.png")}
          />
        </TouchableOpacity>
        <Text style={styles.save_text}>Lailyfa Febrina Card</Text>
      </View>

      <View style={styles.line}></View>

      <Image
        style={styles.card_1}
        source={require("../../images/Card_1.png")}
      />

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
        onPress={() => navigation.navigate("")}
        style={styles.buttonAdd}
      >
        <Text style={styles.buttonAddText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  savecard: {
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
  save_text: {
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
  card_1: {
    marginTop: 30,
    width: 370,
    height: 200,
    borderRadius: 5,
    alignSelf: "center",
  },
  number_text: {
    marginTop: 20,
    width: 103,
    height: 21,
    marginLeft: 16,
    fontWeight: "bold",
    color: "#223263",
  },
  buttonAdd: {
    backgroundColor: "#40BFFF",
    height: 57,
    margin: 10,
    width: "90%",
    marginTop: 90,
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
export default save_Card;
