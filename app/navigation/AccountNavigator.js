import { createStackNavigator } from "@react-navigation/stack";

import { MyAccountScreen, MessagesScreen } from "../screens";
import routes from "./routes";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.ACCOUNT} component={MyAccountScreen} />
    <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
  </Stack.Navigator>
);
export default AccountNavigator;
