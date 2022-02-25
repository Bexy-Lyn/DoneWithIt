import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Paragraph from "./Paragraph";

export default function IconAction({ iconName, iconColor, children, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <View
          style={[styles.iconContainer, { backgroundColor: colors[iconColor] }]}
        >
          <MaterialCommunityIcons
            name={iconName}
            color={colors.white}
            size={25}
          />
        </View>
        <Paragraph style={styles.title}>{children}</Paragraph>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  iconContainer: {
    borderRadius: 30,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginStart: 20,
    fontWeight: "500",
  },
});
