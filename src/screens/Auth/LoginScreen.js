// src/screens/Auth/LoginScreen.js
import { Button, View, Text } from "react-native";
import { Container, Input } from "./styles";

export default function LoginScreen() {
  return (
    <Container>
      <Text>Login</Text>
      <Input placeholder="Email" />
      <Input placeholder="Senha" />
      <Button title="Entrar com Google" />
    </Container>
  );
}
