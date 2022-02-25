import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import Paragraph from "./Paragraph";

export default function Card({ image, title, subTitle }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <Paragraph style={styles.title}>{title}</Paragraph>
        <Paragraph style={styles.subTitle}>{subTitle}</Paragraph>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
  },
});
