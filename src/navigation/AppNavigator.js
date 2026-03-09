import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import DashboardScreen from "../screens/DashboardScreen";
import { AuthContext } from "../context/AuthContext";

const Stack = createStackNavigator();

export default function AppNavigator() {

  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator>

      {user ? (
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
        />
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
      )}

    </Stack.Navigator>
  );
}