// src/screens/Auth/RegisterScreen.js
import { Text, View, Image } from "react-native";

import { TouchableOpacity } from "react-native";

import logo from "../../../assets/logo.jpg";

export default function Auth({ onLoginClick, onRegisterClick }) {
  return (
    <View>
      <Image source={logo} />

      <TouchableOpacity onPress={() => onLoginClick()}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onRegisterClick()}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
