// src/screens/Auth/RegisterScreen.js
import { useEffect, useState } from "react";
import { View, BackHandler, Text, Button } from "react-native";
import { InputContainer, ButtonContainer } from '../../Components/Containers';
import { Container, DivisionText, Image } from './styles';

import logo from '../../../assets/biababylogo.jpg';
import avatar from '../../../assets/avatar.png'
import google from '../../../assets/google.png'
import { colors } from '../../styles/styles';


export default function Auth() {
  const [activeScreen, setActiveScreen] = useState("login"); // "login", "register"
  useEffect(() => {
    const backAction = () => {
      alert("Pressione novamente para sair");
      // if (activeScreen !== "auth") {
      //   setActiveScreen("login");
      //   return true;
      // }
      // return false;auth
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); 
  }, [activeScreen]);

  return (
    <View>
      {activeScreen === "login" && <LoginScreen />}
      {activeScreen === "register" && <RegisterScreen />}
      
    </View>
  );
}


function LoginScreen() {
  return (
    <Container style={{ backgroundColor: colors.screen.auth.login.background }}>
      <Image source={logo} />
      <InputContainer image={avatar} text='E-mail' textColor={colors.screen.auth.login.text} />
      <InputContainer image={avatar} text='Senha' textColor={colors.screen.auth.login.text} />
      <ButtonContainer text='ENTRAR' backgroundColor={colors.button.confirm.background} style={{ Text: { color: colors.button.confirm.text } }} />
      <DivisionText>---------------- ou ----------------- </DivisionText>
      <ButtonContainer image={google} text='Entrar com Google' borderColor={colors.button.google.text} />
   </Container>
  );
}


function RegisterScreen() {
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