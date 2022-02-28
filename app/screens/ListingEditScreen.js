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
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Books", value: 3 },
];

export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ title: "", price: 0, category: null, description: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField name="title" placeholder="Title" />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          keybordType="numeric"
          name="price"
          placeholder="Price"
          textContentType="emailAddress"
        />
        <FormSelection
          items={categories}
          name="category"
          placeholder={"Category"}
        />
        <FormField name="description" placeholder="Description" />
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