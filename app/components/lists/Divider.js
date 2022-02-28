import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../config/colors";

export default function Divider() {
  return <View style={styles.divider} />;
}
const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});
