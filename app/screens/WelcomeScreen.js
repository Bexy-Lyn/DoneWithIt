import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";

export default function WelcomeScreen({ navigation }) {
  const bg = require("../assets/background.jpg");
  const logo = require("../assets/logo-red.png");

  return (
    <ImageBackground source={bg} style={styles.background} blurRadius={6}>
      <View style={styles.logoContianer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.tagLine}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.navigate("Login")}>Login</Button>
        <Button
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContianer: {
    position: "absolute",
    alignItems: "center",
    top: 70,
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
