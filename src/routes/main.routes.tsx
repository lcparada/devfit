import { createStackNavigator } from "@react-navigation/stack";

import CreateProfileRoutes from "./createProfile.routes";
import AppRoutes from "./app.routes";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function MainRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="CreateProfileRoutes"
      >
        <Stack.Screen
          name="CreateProfileRoutes"
          component={CreateProfileRoutes}
        />
        <Stack.Screen name="AppRoutes" component={AppRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
