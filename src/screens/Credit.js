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

const Credit = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.credit}>
        <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
          <Image
            style={styles.undo_ic}
            source={require("../../images/undo_ic.png")}
          />
        </TouchableOpacity>
        <Text style={styles.credit_text}>Credit Card And Debit</Text>
      </View>

      <View style={styles.line}></View>
      <View>
        <Image
          style={styles.card_1}
          source={require("../../images/Card_1.png")}
        />
        <Image
          style={styles.card_2}
          source={require("../../images/Card_2.png")}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("add_Card")}
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
  credit: {
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
  credit_text: {
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
  card_2: {
    marginTop: 15,
    width: 370,
    height: 200,
    borderRadius: 5,
    alignSelf: "center",
  },
  buttonAdd: {
    backgroundColor: "#40BFFF",
    height: 57,
    margin: 10,
    width: "90%",
    marginTop: 210,
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
});
export default Credit;
