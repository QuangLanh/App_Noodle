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

const Categories = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.category}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Image
            style={styles.undo_icon}
            source={require("../../images/undo_ic.png")}
          />
        </TouchableOpacity>
        <Text style={styles.cate_Text}>Category</Text>
      </View>

      <View style={styles.line}></View>

      <TouchableOpacity onPress={() => navigation.navigate("Payment")}>
        <View style={styles.shirt}>
          <Image
            style={styles.shirt_ic}
            source={require("../../images/shirt_ic.png")}
          />
          <Text style={styles.shirt_text}>Shirt</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("")}>
        <View style={styles.shirt}>
          <Image
            style={styles.shirt_ic}
            source={require("../../images/t-shirt_ic.png")}
          />
          <Text style={styles.shirt_text}>T-Shirt</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("")}>
        <View style={styles.shirt}>
          <Image
            style={styles.shirt_ic}
            source={require("../../images/jacket_ic.png")}
          />
          <Text style={styles.shirt_text}>Jacket</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("")}>
        <View style={styles.shirt}>
          <Image
            style={styles.shirt_ic}
            source={require("../../images/sweater_ic.png")}
          />
          <Text style={styles.shirt_text}>Sweater</Text>
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
  category: {
    flexDirection: "row",
    height: 90,
    width: "100%",
    borderWidth: 0.1,
    alignItems: "center",
  },
  undo_icon: {
    width: 8,
    height: 12,
    marginLeft: 10,
    color: "#223263",
  },
  cate_Text: {
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
  shirt: {
    flexDirection: "row",
    height: 70,
    width: "100%",
    borderWidth: 0.1,
    alignItems: "center",
  },
  shirt_ic: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  shirt_text: {
    height: 25,
    marginLeft: 25,
    fontSize: 16,
    color: "#223263",
    fontWeight: "bold",
  },
});
export default Categories;
