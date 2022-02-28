import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import Paragraph from "../Paragraph";

export default function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  style,
  IconComponent,
  showChevron,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={[styles.container, style]}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <Paragraph style={styles.title} numberOfLines={1}>
                {title}
              </Paragraph>
              {subTitle && (
                <Paragraph style={styles.subTitle} numberOfLines={1}>
                  {subTitle}
                </Paragraph>
              )}
            </View>
            {showChevron && (
              <MaterialCommunityIcons
                name="chevron-right"
                size={25}
                color={colors.medium}
                style={styles.chevron}
              />
            )}
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
    flex: 1,
    justifyContent: "center",
    marginLeft: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
  chevron: {
    alignSelf: "center",
  },
});
