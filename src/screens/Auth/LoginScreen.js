// src/screens/Auth/LoginScreen.js
import { Button, View, Text, Image } from "react-native";
import { Container, Input } from "./styles";

export default function LoginScreen() {
  return (
    <Container>
      {/* <Image></Image> */}

      
      <Input 
        placeholder="Email" 
        
        />

      <Input placeholder="Senha" />
      <Button title="Entrar" />
      <Text>ou</Text>
      <Button title="Entrar com o Google" />
    </Container>
  );
}
