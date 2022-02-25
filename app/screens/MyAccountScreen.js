import React from "react";
import { StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import IconAction from "../components/IconAction";
import Divider from "../components/Divider";

export default function MyAccountScreen() {
  const avatar = require("../assets/mosh.jpg");
  return (
    <Screen style={styles.screen}>
      <ListItem
        title="Mosh Hamedani"
        subTitle="programingwithmosh@gmail.com"
        image={avatar}
        style={styles.field}
      />
      <View style={[styles.field, styles.tabContainer]}>
        <IconAction
          iconName="format-list-bulleted"
          iconColor="primary"
          onPress={() => console.log("Listings clicked")}
        >
          My Listings
        </IconAction>
        <Divider />
        <IconAction
          iconName="email"
          iconColor="secondary"
          onPress={() => console.log("Messages clicked")}
        >
          My Messages
        </IconAction>
      </View>
      <View style={styles.field}>
        <IconAction
          iconName="logout"
          iconColor="warning"
          onPress={() => console.log("Logout clicked")}
        >
          Logout
        </IconAction>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    marginTop: 20,
  },
  field: {
    backgroundColor: colors.white,
  },
  tabContainer: {
    marginVertical: 30,
  },
});
