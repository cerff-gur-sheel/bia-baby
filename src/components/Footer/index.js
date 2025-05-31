import { Text } from "../Text";
import { Button, View, Image } from "./style";

import user from '../../../assets/user.png'
import cart from '../../../assets/trolley.png'

const fontSize = 15;

export default function Footer() {
  return(
      <View style={{}}>
         <Button>
          <Image source={cart}/>
          <Text color={'#fff'} size={fontSize}>Carrinho</Text>
        </Button>
        <Button>
          <Image source={user}/>
          <Text color={'#fff'} size={fontSize}>Sua Conta</Text>
        </Button>
        <Button>
          <Image source={user}/>
          <Text color={'#fff'} size={fontSize}>Sua Conta</Text>
        </Button>
      </View>
   );
}
