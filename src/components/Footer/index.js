import { Text } from "../Text";
import { Button, View, Image } from "./style";
import { useNavigation, screens, screen } from '../../context/NavigationContext';

import user from '../../../assets/user.png'
import cart from '../../../assets/trolley.png'
import home from '../../../assets/home.png'

const fontSize = 15;

export default function Footer({ backgroundColor }) {

  const { setScreen, props, setProps } = useNavigation();

  function callAccountScreen() {
    setScreen(screens.account);
    console.log("the new screen: ", screen);
  }

  function callCartScreen() {
    setScreen(screens.cart);
    console.log("the new screen: ", screen);
  }

  return (
    <View style={{ backgroundColor }}>
      <Button onPress={() => callCartScreen()}>
        <Image source={cart} />
        <Text color={'#fff'} size={fontSize}>Carrinho</Text>
      </Button>
      <Button>
        <Image source={home} />
        <Text color={'#fff'} size={fontSize}>Ínicio</Text>
      </Button>
      <Button onPress={() => callAccountScreen()}>
        <Image source={user} />
        <Text color={'#fff'} size={fontSize}>Sua Conta</Text>
      </Button>
    </View>
  );
}
