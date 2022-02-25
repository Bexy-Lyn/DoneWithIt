import React from "react";
import { StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <Card
        image={require("../assets/jacket.jpg")}
        title="Red jacket for sale"
        subTitle="$100"
      />
      <Card
        image={require("../assets/couch.jpg")}
        title="Couch in great condition"
        subTitle="$1000"
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    marginTop: 20,
    backgroundColor: colors.light,
    paddingHorizontal: 20,
  },
});
