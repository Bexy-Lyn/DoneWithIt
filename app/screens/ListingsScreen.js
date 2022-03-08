import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import Loader from "../components/Loader";
import useApi from "../hooks/useApi";

export default function ListingsScreen({ navigation }) {
  const listings = useApi(listingsApi.getListings);
  useEffect(() => listings.request(), []);

  return (
    <Screen style={styles.screen}>
      {listings.error && (
        <>
          <Paragraph style={{ textAlign: "center", padding: 10 }}>
            Couldn't retrieve the listings.
          </Paragraph>
          <Button onPress={listings.request()}>Retry</Button>
        </>
      )}
      <Loader visible={listings.loading} />
      <FlatList
        style={styles.list}
        data={listings.data}
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
