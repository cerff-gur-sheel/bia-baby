import { Button, Image, Text } from "./style";

export default function CategoryButton({image, categoryName}) {
  return(
    <Button>
      <Image source={image} />
      <Text>{categoryName}</Text>
    </Button>
  ); 
}