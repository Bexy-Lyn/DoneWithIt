import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../config/styles";
import Paragraph from "../Paragraph";
import Screen from "../Screen";
import SelectionItem from "./SelectionItem";
import Button from "../Button";
import colors from "../../config/colors";

export default function Selection({
  icon,
  placeholder,
  items,
  onSelectItem,
  onBlur,
  selectedItem,
  width = "100%",
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => {
    setModalOpen(false);
    onBlur();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalOpen(true)}>
        <View style={[styles.container, { width: width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <Paragraph
            style={[
              styles.text,
              { color: selectedItem ? colors.dark : colors.medium },
            ]}
          >
            {selectedItem ? selectedItem.label : placeholder}
          </Paragraph>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalOpen} animationType="slide">
        <Screen>
          <Button onPress={close}>Close</Button>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <SelectionItem
                label={item.label}
                onPress={() => {
                  close();
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
    alignSelf: "center",
  },
});
