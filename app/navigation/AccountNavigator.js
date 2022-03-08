import { createStackNavigator } from "@react-navigation/stack";

import { MyAccountScreen, MessagesScreen } from "../screens";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={MyAccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);
export default AccountNavigator;
