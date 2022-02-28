import { useState } from "react";

import Screen from "./app/components/Screen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import Input from "./app/components/Input";

export default function App() {
  const [firstName, setFirstName] = useState("");
  return (
    <Screen>
      <Input placeholder="Username" icon="email" />
    </Screen>
  );
}
