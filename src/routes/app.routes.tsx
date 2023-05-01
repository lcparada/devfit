import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import Home from "../screens/Home";
import MyWorkouts from "../screens/MyWorkouts";
import Workout from "../screens/Workout";

import { TouchableOpacity } from "react-native-gesture-handler";

import { FontAwesome } from "@expo/vector-icons";
import ButtonWorkout from "../components/ButtonWorkout";

export default function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#d80042",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          height: 60,
        },
        tabBarItemStyle: {
          marginBottom: 10,
        },
        tabBarLabelStyle: {
          fontFamily: "Lexend_400Regular",
        },
      }}
    >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Seu progresso diário",
          headerTitleStyle: {
            fontFamily: "Lexend_400Regular",
            fontSize: 18,
            marginLeft: 20,
          },
          headerRight: () => (
            <TouchableOpacity>
              <FontAwesome name="gear" size={22} color="black" />
            </TouchableOpacity>
          ),
          headerRightContainerStyle: {
            marginRight: 20,
          },
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Workout"
        component={Workout}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <ButtonWorkout />,
        }}
      />
      <Tab.Screen
        name="Meus treinos"
        component={MyWorkouts}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome name="list-alt" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
