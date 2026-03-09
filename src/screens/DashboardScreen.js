import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../context/AuthContext";

export default function DashboardScreen() {

  const { user, logout } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>

      <Text style={{ fontSize:22 }}>
        Welcome
      </Text>

      <Text style={{ marginBottom:20 }}>
        {user?.email}
      </Text>

      <Button
        title="Logout"
        onPress={() => {
          logout();
          navigation.replace("Login");
        }}
      />

    </View>
  );
}