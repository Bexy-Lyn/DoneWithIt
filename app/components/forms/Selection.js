import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../config/styles";
import Paragraph from "../Paragraph";
import Screen from "../Screen";
import SelectionItem from "../SelectionItem";

export default function Selection({
  icon,
  placeholder,
  items,
  onSelectItem,
  selectedItem,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalOpen(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <Paragraph style={styles.text}>
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
          <Button title="close" onPress={() => setModalOpen(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <SelectionItem
                label={item.label}
                onPress={() => {
                  setModalOpen(false);
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
    width: "100%",
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
