import { createStackNavigator } from "@react-navigation/stack";

import { ListingsScreen, ListingDetailsScreen } from "../screens";
import routes from "./routes";

const Stack = createStackNavigator();
const ListingsNavigator = () => (
  <Stack.Navigator
    screenOptions={{ presentation: "modal", headerShown: false }}
  >
    <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);
export default ListingsNavigator;
