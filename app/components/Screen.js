import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.screen, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
