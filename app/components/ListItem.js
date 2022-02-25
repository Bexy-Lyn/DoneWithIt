import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import colors from "../config/colors";
import Paragraph from "./Paragraph";

export default function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
              <Paragraph style={styles.title}>{title}</Paragraph>
              <Paragraph style={styles.subTitle}>{subTitle}</Paragraph>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  detailsContainer: {
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
