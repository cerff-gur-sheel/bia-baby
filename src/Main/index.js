import { Container } from "./styles.js";

import Auth from "../screens/Auth/index.js";
import RegisterScreen from "../screens/Auth/RegisterScreen.js";
import LoginScreen from "../screens/Auth/LoginScreen.js";

export default function Main() {
  return (
    <Container>
      <LoginScreen />
    </Container>
  );
}
