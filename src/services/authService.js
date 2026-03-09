import * as Google from "expo-auth-session/providers/google";
import { signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";

export const useGoogleAuth = () => {

  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
  });

  const signIn = async () => {

    if (response?.type === "success") {

      const { id_token } = response.authentication;

      const credential = GoogleAuthProvider.credential(id_token);

      const userCredential = await signInWithCredential(auth, credential);

      return userCredential.user;
    }
  };

  return { request, response, promptAsync, signIn };
};