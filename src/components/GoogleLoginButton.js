import React from "react";
import { Button } from "react-native";

export default function GoogleLoginButton({ onPress, disabled }) {
  return (
    <Button
      title="Login with Google"
      disabled={disabled}
      onPress={onPress}
    />
  );
}