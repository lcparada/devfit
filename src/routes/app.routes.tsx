import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Welcome from "../screens/Welcome";
import Name from "../screens/Name";
import DaysTraining from "../screens/DaysTraining";
import Level from "../screens/Level";

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Name"
          component={Name}
          options={{
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="DaysTraining"
          component={DaysTraining}
          options={{
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Level"
          component={Level}
          options={{
            headerTitle: "",
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
