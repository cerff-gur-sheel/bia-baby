// src/screens/Auth/login.js
import { Text, Image, Button } from 'react-native';
import { EnterButton , Container, DivisionText, InputContainer, ButtonContainer } from './styles';

import logo from '../../../assets/biababylogo.jpg';
import avatar from '../../../assets/avatar.png'
import google from '../../../assets/google.png'


export default function LoginScreen() {
  return (
    <Container>
      <Image source={logo} style={{ width: 320, height: 200 }} />
      <InputContainer image={avatar} text='Email' />
      <InputContainer image={avatar} text='Senha' />

      <EnterButton>
        <Text>Entrar</Text>
      </EnterButton>
      <DivisionText>------------------- ou -------------------- </DivisionText>
       <ButtonContainer image={google} text='Entrar com Google' borderColor={'#62C682'} />
   </Container>
  );
}
