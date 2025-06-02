import { Button, Image, Text } from "./style";

export default function CategoryButton({image, categoryName, callProdutcList}) {
  return(
    <Button onPress={callProdutcList}>
      <Image source={image} />
      <Text>{categoryName}</Text>
    </Button>
  ); 
}