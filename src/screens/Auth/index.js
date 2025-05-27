// src/screens/Auth/RegisterScreen.js
import { useEffect, useState } from "react";
import { View, BackHandler, Text } from "react-native";
import { InputContainer, ButtonContainer } from '../../Components/Containers';
import { RegisterButton, Container, Content, DivisionText, Image, RegisterText } from './styles';

import logo from '../../../assets/biababylogo.jpg';
// import userPhoto from '../../../assets/userphoto.png'
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  }

  const handleGoogleLogin = () => {
    // TODO: Implement Google login logic here
    console.log("Login with Google");
  }
  
  return (
    <Container style={{ backgroundColor: colors.screen.auth.login.background }}>
      <Content>
      <Image source={logo} />
      <InputContainer 
        image={avatar} 
        placeholder='E-mail' 
        
        onChangeText={setEmail}
        value={email}
        
        style={{
          color: colors.screen.auth.login.text,
          borderColor: colors.screen.auth.login.inputBorder
        }}
      />
      <InputContainer 
        image={avatar} 
        placeholder='Senha' 
        secureTextEntry={true} 
        
        onChangeText={setPassword}
        value={password}
        
        style={{
          color: colors.screen.auth.login.text,
          borderColor: colors.screen.auth.login.inputBorder
        }}
      />
      <ButtonContainer 
        placeholder='ENTRAR' 
        
        onPress={handleLogin}
        
        style={{
          backgroundColor: colors.button.confirm.background,
          borderColor: colors.button.confirm.background, 
          color: colors.button.confirm.text 
        }} 
      />
      <DivisionText>
        ---------------- ou ----------------- 
      </DivisionText>
      <ButtonContainer 
        image={google} 
        placeholder='Entrar com Google' 
        
        onPress={handleGoogleLogin}
        style={{
          color: colors.button.google.text
        }}
      />
      </Content>
   </Container>
  );
}


function RegisterScreen() {
  return (
    <Container 
      style={{ 
        backgroundColor: colors.screen.auth.register.background,
      }}>
        <Content>
          <Text>TESTE</Text>
        </Content>
   </Container>
  );
}