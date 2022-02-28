import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

import Paragraph from "../Paragraph";
import Icon from "../Icon";

export default function SelectionItem({ label, onPress, icon }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={icon && styles.container}>
        {icon && (
          <Icon
            style={styles.icon}
            name={icon.name}
            backgroundColor={icon.color}
            size={60}
          />
        )}
        <Paragraph style={[styles.text, icon && { textAlign: "center" }]}>
          {label}
        </Paragraph>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 120,
    marginVertical: 20,
  },
  icon: {
    marginBottom: 5,
  },
  text: {
    padding: 20,
  },
});
