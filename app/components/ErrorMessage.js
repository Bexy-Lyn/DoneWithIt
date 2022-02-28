import React from "react";
import { StyleSheet } from "react-native";
import colors from "../config/colors";
import Paragraph from "./Paragraph";

export default function ErrorMessage({ children, visible }) {
  if (!children || !visible) return null;
  return <Paragraph style={styles.error}>{children}</Paragraph>;
}
const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});
