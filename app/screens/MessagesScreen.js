import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import { Divider, ListItemDeleteAction, ListItem } from "../components/lists";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "vrsuzfdogcp<ihaöoSvhrozfu ihu",
    description:
      "D1vgzeoadipsucoiühfgvio paosdiapouf9ße8rwf0üc+jpxduivg bdi fi sjco hfipwoISJ ",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2cekuvgadfvlsknjcvhusouztrsfahvcnösodNACHFPOIERUQHGVPIUAJNCDOS",
    description:
      "D2VFSIHDBAPUOSnämciahvöfsbvianocpxSAPOIDOER8ZGHB JCKHV89RWTE0QFI",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "T3BVDGZOUEAIRPWOq",
    description: "Dcqfwrbveclwijöqo 3",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 4,
    title: "Tbguozadfzp9s80üLPSD<Ü#YVOJFHOIPURTIZRE9P8AVOÜJ4",
    description: "Db uifhperowöamfvc4",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const remove = (message) => {
    const m = messages.filter((m) => m.id !== message.id);
    setMessages(m);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(item.title)}
            showChevron
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => remove(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={Divider}
        refreshing={refreshing}
        onRefresh={() => setMessages(initialMessages)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
