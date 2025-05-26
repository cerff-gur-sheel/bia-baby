// src/screens/Auth/RegisterScreen.js
import { Text, Button } from "react-native";
// import { Container, Input } from "./styles";

export default function RegisterScreen() {
  return (
    <Container>
      <Text>Register</Text>

      <Input placeholder="Nome" />
      <Input placeholder="Sobrenome" />
      <Input placeholder="Email" />
      <Input placeholder="Senha" />
      <Input placeholder="Confirmar Senha" />

      <Button title="Cadastrar" />
      <Button title="Continuar com Google" />
    </Container>
  );
}
