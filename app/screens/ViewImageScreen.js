import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  const img = require("../assets/chair.jpg");
  return (
    <View style={styles.contianer}>
      <View style={[styles.icon, styles.closeIcon]}>
        <MaterialCommunityIcons name="close" color={colors.white} size={35} />
      </View>
      <View style={[styles.icon, styles.deleteIcon]}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={35}
        />
      </View>
      <Image source={img} resizeMode="contain" style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  icon: {
    position: "absolute",
    top: 40,
  },
  closeIcon: {
    left: 30,
  },
  deleteIcon: {
    right: 30,
  },
});

export default ViewImageScreen;
