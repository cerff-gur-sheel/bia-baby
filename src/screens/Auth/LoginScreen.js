// src/screens/Auth/LoginScreen.js

import React, { useEffect } from "react";
import { Button } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "<SEU_EXPO_CLIENT_ID>",
    androidClientId: "<SEU_ANDROID_CLIENT_ID>",
    iosClientId: "<SEU_IOS_CLIENT_ID>",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("Token de acesso:", authentication.accessToken);
    }
  }, [response]);

  return (
    <Button
      title="Entrar com Google"
      disabled={!request}
      onPress={() => promptAsync()}
    />
  );
}
