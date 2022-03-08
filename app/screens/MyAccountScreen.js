import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import { Divider, ListItem } from "../components/lists";
import routes from "../navigation/routes";

const menuItems = [
  {
    title: "My Listings",
    linkTo: "",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    linkTo: routes.MESSAGES,
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export default function MyAccountScreen({ navigation }) {
  const avatar = require("../assets/mosh.jpg");
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@hmail.com"
          image={avatar}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => navigation.navigate(item.linkTo)}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={() => <Divider />}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Logout"
          IconComponent={
            <Icon name="logout" backgroundColor={colors.warning} />
          }
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
    backgroundColor: colors.white,
  },
});
