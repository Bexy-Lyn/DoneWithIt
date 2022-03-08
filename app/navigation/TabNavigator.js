import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native";

import colors from "../config/colors";
import { ListingEditScreen } from "../screens";
import ListingsNavigator from "./ListingsNavigator";
import AccountNavigator from "./AccountNavigator";
import TabActionButton from "./TabActionButton";

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.medium,
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons size={size} color={color} name="home" />
        ),
      }}
      name="Feed"
      component={ListingsNavigator}
    />
    <Tab.Screen
      name="ListingEdit"
      tabBarAccessibilityLabel="Add a Listing"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <TabActionButton
            onPress={() => navigation.navigate("ListingEdit")}
            icon="plus-circle"
          />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons size={size} color={color} name="account" />
        ),
      }}
    />
  </Tab.Navigator>
);
export default TabNavigator;
