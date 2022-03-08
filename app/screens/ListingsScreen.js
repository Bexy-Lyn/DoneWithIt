import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

export default function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  loadListings = async () => {
    const res = await listingsApi.getListings();
    if (!res.ok) return setError(true);
    else {
      setError(false);
      setListings(res.data);
    }
  };

  useEffect(() => loadListings(), []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <Paragraph style={{ textAlign: "center", padding: 10 }}>
            Couldn't retrieve the listings.
          </Paragraph>
          <Button onPress={loadListings}>Retry</Button>
        </>
      )}
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
