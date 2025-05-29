import { useState } from "react";
import Auth from "../screens/Auth/index.js";
import Home from "../screens/Home/index.js";
import { Container } from "./styles.js";
import UpperBar from "../Components/UpperBar";
import Footer from "../Components/Footer/index.js";

const screens = Object.freeze({
  auth: 'auth',
  home: 'home'
});

export default function Main() {
  const [screen, setScreen] = useState(screens.home)

  return (
    <Container>
      {/* <UpperBar /> */}
      { screen == screens.auth && <Auth /> }
      { screen == screens.home && <Home /> }
    </Container>
  );
}
