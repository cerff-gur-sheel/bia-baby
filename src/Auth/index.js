import { View, Container, LogoImage, EnterButton, TextInput } from "./style";
import { useState } from "react"
import { Text } from "../components/Text";
import IconTextInput from "../components/IconTextInput";
import { BackgroundContext } from '../context/BackgroundProvider';
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

export default function Auth({setLoged}) {
	const [page, setPage] = useState(authPages.home);

	return (
		<View style={{ backgroundColor: "white" }}>
			{page === authPages.home && <Home setPage={setPage} />}
			{page === authPages.login && <Login setLoged={setLoged} />}
			{page === authPages.register && <Register setLoged={setLoged} />}
		</View>
	);
}

function Home({ setPage }) {
	const { setBackground } = useContext(BackgroundContext);

	useEffect(() => {
		setBackground(auth.register.backgroud);
	}, []);

	return (
		<Container>
			<LogoImage source={logo} />
			<Text></Text>
			<EnterButton onPress={() => setPage(authPages.login)}>
				<Text color={button.text} size={16} weight={'bold'}>Entrar</Text>
			</EnterButton>

			<EnterButton onPress={() => setPage(authPages.register)}>
				<Text color={button.text} size={16} weight={'bold'}>Cadastrar-se</Text>
			</EnterButton>
		</Container>
	);
}


function Login({setLoged}) {
	const {setBackground} = useContext(BackgroundContext);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleLogin() {
    setLoged(true);
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
				onPress={handleLogin}>
				<Text color={button.text} size={16} weight={'bold'}>Entrar</Text>
			</EnterButton>
			<Text color={button.backgroud}>---------------------- ou ------------------------</Text>
			<IconButton 
				icon={google}
				placeholder={"Continuar com google"}
				onPress={handleGoogleLogin}
				style={{
					textColor:'black', 
					borderColor: button.border
				}}
			/>
		</Container>
	);
}

function Register({setLoged}) {
  const { setBackground } = useContext(BackgroundContext);
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

        <EnterButton onPress={() => setLoged(true)}  smallButton={true} />
      </Container>
	  </View>
	);
}