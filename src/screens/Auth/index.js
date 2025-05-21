// src/screens/Auth/RegisterScreen.js
import { View } from "react-native";
import { useEffect, useState } from "react";
import { BackHandler } from "react-native";


import HomeAuth from "./HomeAuth.js";
import RegisterScreen from "./RegisterScreen.js";
import LoginScreen from "./LoginScreen.js";

export default function Auth() {
  const [activeScreen, setActiveScreen] = useState("auth"); // "auth", "login", "register"
  useEffect(() => {
    const backAction = () => {
      if (activeScreen !== "auth") {
        setActiveScreen("auth");
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); 
  }, [activeScreen]);

  return (
    <View>
      {activeScreen === "auth" && (
        <HomeAuth
          onLoginClick={() => setActiveScreen("login")}
          onRegisterClick={() => setActiveScreen("register")}
        />
      )}
      {activeScreen === "login" && <LoginScreen />}
      {activeScreen === "register" && <RegisterScreen />}
    </View>
  );
}
