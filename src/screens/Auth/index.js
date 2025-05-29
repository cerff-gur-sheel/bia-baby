// src/screens/Auth/RegisterScreen.js
import { useEffect, useState } from "react";
import { View, BackHandler, Text } from "react-native";
import { InputContainer, ButtonContainer } from '../../Components/Containers';
import { 
  NewUserImage, 
  RegisterButton, 
  Container,
  Content,
  DivisionText, 
  Image, 
  RegisterText } from './styles';
import Footer from '../../Components/Footer';

import logo from '../../../assets/biababylogo.jpg';
import user from '../../../assets/user.png';
import avatar from '../../../assets/avatar.png';
import google from '../../../assets/google.png';
import { colors } from '../../styles/styles';

const authPages = Object.freeze({
  login: 'login',
  register: 'register'
})

export default function Auth() {
  const [activeScreen, setActiveScreen] = useState(authPages.login); // "login", "register"
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
      {activeScreen === authPages.login && <LoginScreen />}
      {activeScreen === authPages.register && <RegisterScreen />}
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
      <Footer style={{ backgroundColor: colors.screen.auth.login.footer }}/>
    </Container>
  );
}


function RegisterScreen() {
  const [crendentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  return (
    <Container style={{ backgroundColor: colors.screen.auth.register.background }}>
      <Content>
        <NewUserImage source={user} />
        <RegisterText>Cadastre-se</RegisterText>
        <RegisterText>----------------</RegisterText>
        <InputContainer
          placeholder='Nome' 

          onChangeText={(text) => setCredentials({ ...crendentials, name: text })}
          value={crendentials.name}

          style={{
            color: colors.screen.auth.register.text,
            borderColor: colors.screen.auth.register.inputBorder
          }}
        />
        <InputContainer
          placeholder='E-mail'

          onChangeText={(text) => setCredentials({ ...crendentials, email: text })}
          value={crendentials.email}

          style={{
          color: colors.screen.auth.register.text,
          borderColor: colors.screen.auth.register.inputBorder
          }}
        />
        <InputContainer 
          placeholder='Senha' 
          secureTextEntry={true} 

          onChangeText={(text) => setCredentials({ ...crendentials, password: text })}
          value={crendentials.password}

          style={{
            color: colors.screen.auth.register.text,
            borderColor: colors.screen.auth.register.inputBorder
          }}
        />

        <InputContainer
          placeholder='Confirme a senha' 
          secureTextEntry={true} 

          onChangeText={(text) => setCredentials({ ...crendentials, confirmPassword: text })}
          value={crendentials.confirmPassword}

          style={{
            color: colors.screen.auth.register.text,
            borderColor: colors.screen.auth.register.inputBorder
          }}
        />
        <RegisterButton
          text=''
          onPress={() => console.log("Register", crendentials)}
        />
      </Content>
      <Footer style={{ backgroundColor: colors.screen.auth.register.footer }}/>
    </Container>
  );
}