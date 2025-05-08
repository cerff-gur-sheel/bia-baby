import { Text, View, Image } from "react-native";

import { TouchableOpacity } from "react-native";

import logo from "../../../assets/logo.jpg";

export default function Auth() {
  return (
    <View>
      <Image source={logo} />

      <TouchableOpacity onPress={() => alert("Login")}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert("Register")}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
