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

const Payment = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.payment}>
        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
          <Image
            style={styles.undo_ic}
            source={require("../../images/undo_ic.png")}
          />
        </TouchableOpacity>
        <Text style={styles.payment_text}>Payment</Text>
      </View>

      <View style={styles.line}></View>

      <TouchableOpacity onPress={() => navigation.navigate("Credit")}>
        <View style={styles.card}>
          <Image
            style={styles.card_ic}
            source={require("../../images/card_ic.png")}
          />
          <Text style={styles.card_text}>Credit Card Or Debit</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("")}>
        <View style={styles.card}>
          <Image
            style={styles.card_ic}
            source={require("../../images/paypal_ic.png")}
          />
          <Text style={styles.card_text}>Paypal</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("")}>
        <View style={styles.card}>
          <Image
            style={styles.card_ic}
            source={require("../../images/bank_ic.png")}
          />
          <Text style={styles.card_text}>Bank Transfer</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  payment: {
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
  payment_text: {
    height: 22,
    width: 82,
    marginLeft: 30,
    fontSize: 18,
    color: "#223263",
    fontWeight: "bold",
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  card: {
    flexDirection: "row",
    height: 70,
    width: "100%",
    borderWidth: 0.1,
    alignItems: "center",
  },
  card_ic: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  card_text: {
    height: 25,
    marginLeft: 25,
    fontSize: 16,
    color: "#223263",
    fontWeight: "bold",
  },
});
export default Payment;
