import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Paragraph from "./Paragraph";

export default function SelectionItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Paragraph style={styles.text}>{label}</Paragraph>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
