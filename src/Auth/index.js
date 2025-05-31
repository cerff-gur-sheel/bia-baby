import { useState } from "react"

import { Text } from "../components/Text";
import { 
  View, 
  Container, 
  LogoImage, 
  EnterButton,
  TextInput } from "./style";

import IconTextInput from "../components/IconTextInput";

import { BackgroundProvider, BackgroundContext } from '../context/BackgroundProvider';
import { useContext, useEffect } from 'react';


import google from '../../assets/google.png';

import logo from '../../assets/biababylogo.jpg';
import avatar from '../../assets/avatar.png';
import { auth, button } from "../styles/colors";
import IconButton from "../components/IconButton";

const authPages = Object.freeze({
	home: 'home',
	login: 'login',
	register: 'register'
})

export default function Auth(){
	const [page, setPage] = useState(authPages.register)


	return(
		<View style={{backgroundColor: "white"}}>
			{page === authPages.home && <Home />}
			{page === authPages.login && <Login />}
			{page === authPages.register && <Register />}
		</View>
	);
}

function Home() {
	const { background, setBackground } = useContext(BackgroundContext);
	useEffect(() => { setBackground(auth.register.backgroud); },[]);
	console.log("aaa")
	return (
		<Container>
			<Text>sei la</Text>

		</Container>
	);
}

function Login() {
	const { background, setBackground } = useContext(BackgroundContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleLogin() {
		console.log("login");
	}

	function handleGoogleLogin() {
		console.log("login with google");
	}

	useEffect(() => { setBackground(auth.login.backgroud); },[]);

	return (
		<Container>
			<LogoImage source={logo}/>
			<IconTextInput 
				icon={avatar} 
				placeholder={"E-mail"} />

			<IconTextInput 
				icon={avatar} 
				placeholder={"Senha"} 
				secureTextEntry={true}/>
			<EnterButton 
				backgroundCOlor={button.backgroud}
				onClick={handleLogin}>
				<Text color={button.text} size={16} weight={'bold'}>Entrar</Text>
			</EnterButton>
			<Text color={button.backgroud}>---------------------- ou ------------------------</Text>
			<IconButton 
				icon={google}
				placeholder={"Continuar com google"}
				onClick={handleGoogleLogin}
				style={{
					textColor:'black', 
					borderColor: button.border
				}}
			/>
		</Container>
	);
}

function Register() {
  const { background, setBackground } = useContext(BackgroundContext);
	useEffect(() => { setBackground(auth.register.backgroud); },[]);
	
	return (
	  <View backgroundColor={auth.register.container}>
	  	<Container>
	  	  <Text color={'#fff'} size={32} weight={'bold'}>Cadastra-se</Text>
	  	  <Text color={'#fff'}>---------------</Text>

        <TextInput 
          placeholder="Nome Completo"
          placeholderTextColor='#fff'/>
	  	
        <TextInput 
          placeholder="E-mail"
          placeholderTextColor='#fff'/>
      
        <TextInput 
          placeholder="Senha"
          placeholderTextColor='#fff'
          secureTextEntry={true}/>
      
        <TextInput 
          placeholder="Confirmar Senha"
          placeholderTextColor='#fff'
          secureTextEntry={true}
          marginBottom={20}/>
          
        <EnterButton smallButton={true} />
      </Container>
	  </View>
	);
}