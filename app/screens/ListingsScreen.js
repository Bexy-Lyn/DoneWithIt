import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";

export default function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);

  loadListings = async () => {
    const res = await listingsApi.getListings();
    setListings(res.data);
  };

  useEffect(() => loadListings(), []);

  return (
    <Screen style={styles.screen}>
      <FlatList
        style={styles.list}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    backgroundColor: colors.light,
  },
  list: {
    flex: 1,
  },
});
