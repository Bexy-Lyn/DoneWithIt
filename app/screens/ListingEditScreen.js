import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  Form,
  FormField,
  SubmitButton,
  FormSelection,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().nullable().required().label("Category"),
  description: Yup.string().label("Description"),
});

const categories = [
  {
    value: 1,
    label: "Furniture",
    icon: {
      name: "floor-lamp",
      color: "#fc5c65",
    },
  },
  {
    value: 2,
    label: "Cars",
    icon: {
      name: "car",
      color: "#fd9644",
    },
  },
  {
    value: 3,
    label: "Cameras",
    icon: {
      name: "camera",
      color: "#fed330",
    },
  },
  {
    value: 4,
    label: "Games",
    icon: {
      name: "cards",
      color: "#26de81",
    },
  },
  {
    value: 5,
    label: "Clothing",
    icon: {
      name: "shoe-heel",
      color: "#2bcbba",
    },
  },
  {
    value: 6,
    label: "Sports",
    icon: {
      name: "basketball",
      color: "#45aaf2",
    },
  },
  {
    value: 7,
    label: "Movies & Music",
    icon: {
      name: "headphones",
      color: "#4b7bec",
    },
  },
  {
    value: 8,
    label: "Books",
    icon: {
      name: "book-open-variant",
      color: "#aa55ff",
    },
  },
  {
    value: 9,
    label: "Other",
    icon: {
      name: "dots-vertical",
      color: "#888899",
    },
  },
];

export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keybordType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width="30%"
        />
        <FormSelection
          items={categories}
          name="category"
          placeholder="Category"
          width={"50%"}
          numColumns={3}
        />
        <FormField
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton>Post</SubmitButton>
      </Form>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
