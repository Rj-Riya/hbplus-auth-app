import React, { useContext, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";
import { validateDomain } from "../utils/validateDomain";
import GoogleLoginButton from "../components/GoogleLoginButton";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {

  const { login } = useContext(AuthContext);
  const navigation = useNavigation();

  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
  });

  useEffect(() => {

    if (response?.type === "success") {

      const accessToken = response.authentication.accessToken;

      fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
        .then(res => res.json())
        .then(user => {

          const email = user.email;

          if (!validateDomain(email)) {

            Alert.alert(
              "Access restricted",
              "Please login using your official domain email."
            );
            navigation.replace("Login");
            return;
          }

          login(user);

          navigation.replace("Dashboard");

        });
    }

  }, [response, login, navigation]);

  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>

      <Text style={{ fontSize:24, marginBottom:20 }}>
        HBPlus Login
      </Text>

      <GoogleLoginButton
        disabled={!request}
        onPress={() => promptAsync()}
      />

    </View>
  );
}