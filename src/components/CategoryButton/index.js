import { Button, Image, Text } from "./style";

export default function CategoryButton({image, categoryName, onPress }) {
  return(
    <Button onPress={ onPress }>
      <Image source={image} />
      <Text>{categoryName}</Text>
    </Button>
  ); 
}