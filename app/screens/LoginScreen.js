import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  const logo = require("../assets/logo-red.png");

  const login = (values) => {
    // handle login
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={login}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keybordType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton>Login</SubmitButton>
      </Form>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 40,
  },
});
