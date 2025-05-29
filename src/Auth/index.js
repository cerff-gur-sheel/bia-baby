import { useState } from "react"

import { Text } from "../components/Text";
import { View, Container, LogoImage, EnterButton } from "./style";

import IconTextInput from "../components/IconTextInput";

import google from '../../assets/google.png';

import logo from '../../assets/biababylogo.jpg';
import avatar from '../../assets/avatar.png';
import { button } from "../styles/colors";
import IconButton from "../components/IconButton";

const authPages = Object.freeze({
    home: 'home',
    login: 'login',
    register: 'register'
})

export default function Auth(){
    const [page, setPage] = useState(authPages.login)

    return(
        <View style={{backgroundColor: "white"}}>
            {page === authPages.home && <Home />}
            {page === authPages.login && <Login />}
            {page === authPages.register && <Register />}
        </View>
    );
}

function Home() {
    return (
    <>
    </>
    );
}

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        console.log("login");
    }

    function handleGoogleLogin() {
        console.log("login with google");
    }

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
            <Text color={button.backgroud}>------------------------------ ou ------------------------------</Text>
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
    return(
        <>
        </>
    );
}